import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

assert.equal(process.platform, 'win32',
  '8XAI 0.2.1 requires Windows; this distribution cannot run on a Linux deployment host.');
assert.equal(process.arch, 'x64', '8XAI 0.2.1 requires Windows x64.');

const manifest = JSON.parse(await readFile(new URL('../upstream-manifest.json', import.meta.url)));
const executable = await readFile(new URL('../bin/8xai-design-mcp.exe', import.meta.url));
assert.equal(manifest.version, '0.2.1');
assert.equal(manifest.platform, 'windows-x64');
assert.equal(manifest.support.transport, 'stdio');
assert.equal(executable.length, manifest.artifact.size);
assert.equal(createHash('sha256').update(executable).digest('hex'), manifest.artifact.sha256);
assert.equal(manifest.artifact.sha256,
  'c444b62c40842404d4a49ff8c3840c2c5d5cf021f909c0db8ce71ac05af50c49');
console.log('Verified official 8XAI 0.2.1 Windows x64 executable (SHA256 and size).');
