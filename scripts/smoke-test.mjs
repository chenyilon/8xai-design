import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import './verify.mjs';

const scratch = await mkdtemp(join(tmpdir(), '8xai-public-smoke-'));
const environment = Object.fromEntries(
  Object.entries(process.env).filter(([name]) => !name.toUpperCase().startsWith('XAI_')));
environment.XAI_DATA_DIR = scratch;
environment.XAI_ASSET_ROOT = scratch;
const child = spawn(fileURLToPath(new URL('../bin/8xai-design-mcp.exe', import.meta.url)), [], {
  cwd: scratch,
  env: environment,
  stdio: ['pipe', 'pipe', 'pipe'],
  windowsHide: true
});
const closed = new Promise(resolve => child.once('close', resolve));
const pending = new Map();
const fail = error => {
  for (const request of pending.values()) request.reject(error);
  pending.clear();
};
child.once('error', fail);
child.once('close', () => fail(new Error('MCP exited before answering a request.')));
child.stdin.on('error', fail);
// Do not print server diagnostics, which may contain local configuration.
child.stderr.resume();
const lines = createInterface({ input: child.stdout });
lines.on('line', line => {
  try {
    const message = JSON.parse(line);
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error('MCP returned a protocol error.'));
    else request.resolve(message.result);
  } catch {
    fail(new Error('MCP stdout contained non-JSON output.'));
  }
});
let sequence = 0;
function request(method, params) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`MCP ${method} timed out.`));
    }, 60000);
    pending.set(id, {
      resolve: value => { clearTimeout(timer); resolve(value); },
      reject: error => { clearTimeout(timer); reject(error); }
    });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
}
try {
  const initialized = await request('initialize', {
    protocolVersion: '2025-11-25',
    capabilities: {},
    clientInfo: { name: '8xai-public-smoke', version: '1.0.0' }
  });
  assert.equal(initialized.serverInfo.name, '8xai-design');
  // The official 0.2.1 artifact advertises 1.30.0 in its MCP handshake.
  assert.equal(initialized.serverInfo.version, '1.30.0');
  child.stdin.write('{"jsonrpc":"2.0","method":"notifications/initialized"}\n');
  const { tools } = await request('tools/list', {});
  for (const name of ['tabs_list', 'batch_plan', 'batch_submit', 'results_save']) {
    assert.ok(tools.some(tool => tool.name === name), `Missing ${name}`);
  }
  const catalog = await request('tools/call', { name: 'tabs_list', arguments: {} });
  assert.notEqual(catalog.isError, true);
  const plan = await request('tools/call', {
    name: 'batch_plan',
    arguments: {
      tab: 'full_gen',
      variant: 'full_gen.regular',
      params: { clothingImages: ['smoke-test-placeholder.png'], outputCount: 1 }
    }
  });
  assert.notEqual(plan.isError, true);
  assert.equal(plan.structuredContent.status, 'planned');
  console.log(`Passed initialize, tools/list (${tools.length} tools), tabs_list and offline batch_plan.`);
  console.log('No login, uploads, analysis or image-generation requests were submitted.');
} finally {
  lines.close();
  child.stdin.end();
  const killTimer = setTimeout(() => child.kill(), 3000);
  try {
    await closed;
  } finally {
    clearTimeout(killTimer);
    assert.equal(dirname(resolve(scratch)), resolve(tmpdir()));
    assert.ok(basename(scratch).startsWith('8xai-public-smoke-'));
    await rm(scratch, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  }
}
