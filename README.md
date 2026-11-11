# 8xai-design 0.2.1

八象设计 MCP 的 **Windows x64 / stdio 发行包**。使用官方 0.2.1 可执行文件与公开操作指南，不使用 Java。

此仓库提供二进制分发和部署检查脚本，**不是 0.2.1 源码仓库**。程序内部代码和生图提示词未在此公开。

## 运行条件

- Windows x64；可执行文件不依赖本仓库的 Node.js 脚本。
- 使用检查脚本时需要 Node.js 22 或以上；没有 npm 依赖，不需要 `npm install`。
- MCP 客户端支持启动本地 stdio 服务。
- 登录和生图需要用户自己的八象账户；素材路径必须在运行 MCP 的机器上可访问。

## 本地运行

```powershell
git clone https://github.com/chenyilon/8xai-design.git
cd 8xai-design
npm run build
npm test
```

`build` 校验系统、架构、文件大小与固定 SHA256，不编译程序。`test` 使用临时独立数据目录执行 MCP 握手、工具列表、页签列表和免费预演，不登录、不提交生图。

将 `examples/mcp.json` 或 `examples/codex.toml` 中的 `C:/8xai-design` 改成实际克隆目录，合并到客户端配置。不要覆盖已有配置。

客户端直接运行 `bin/8xai-design-mcp.exe`，无启动参数。也可以用 `npm --silent start` 启动 stdio 进程；`--silent` 避免 npm 日志混入协议输出。进程等待 MCP 客户端的 JSON-RPC 输入，不会打开网页。

`XAI_ASSET_ROOT` 指向素材目录，`XAI_DATA_DIR` 指向私有运行数据目录。创建这两个目录并确保进程有读写权限。登录凭据通过客户端内的认证工具配置，不要写入仓库。

## MCPmarket 部署说明

GitHub Source URL:

```text
https://github.com/chenyilon/8xai-design
```

部署名称：`8xai-design`。Windows x64 构建命令：`npm run build`，启动命令：`npm --silent start`；传输方式为 stdio。

**市场云端兼容性尚未验证。** MCPmarket 的公开文档要求 GitHub 仓库提供构建脚本或 Dockerfile，但未说明支持 Windows 执行环境。若其构建或运行环境是 Linux，这个 Windows 发行包不能直接部署；构建检查会明确报错。仓库上传成功不等于市场部署成功。

本包未提供 Linux 可执行文件、HTTP/SSE 服务或浏览器登录代理，也不提供通过 Wine 运行的兼容性保证。请先向市场确认 Windows x64 / stdio 支持；若只支持 Linux，需要八象提供 Linux 发行包，或在 Windows 主机运行并另行配置经过认证的远程 MCP 服务。

云端进程不能直接读取你电脑的 `G:` 素材目录；不要将私人服装、模特、姿态图片或账户数据提交到公开仓库。

官方部署文档：https://docs.mcpmarket.com/docs/mcp-servers/deploying-a-custom-mcp-server

## 包内容与校验

- `bin/8xai-design-mcp.exe`：未修改的官方 Windows x64 程序。
- `upstream-manifest.json`：原安装包的公开版本、能力与校验元数据。
- `guidance/8xai-design-guide/`：官方公开操作指南。
- `scripts/`、`examples/`：本仓库增加的校验、离线测试和无凭据配置示例。

官方发布地址：https://plugin.8xai.cn/releases/0.2.1/manifest.json

程序 SHA256：

```text
c444b62c40842404d4a49ff8c3840c2c5d5cf021f909c0db8ce71ac05af50c49
```

本仓库不包含原安装目录的客户端配置、备份、诊断数据库、账户状态、任务数据或用户素材。程序哈希与官方发行包一致，只能证明二进制未修改，不能证明闭源程序内部没有任何敏感字符串或数据。

版本元数据差异：官方发行清单标记 `0.2.1`，该文件的 MCP `initialize` 响应中 `serverInfo.version` 为 `1.30.0`。本仓库保留上游行为，离线测试同时检查固定发行文件哈希和实际握手版本，不将二者混为一谈。

生图前先预演，确认数量、参数、费用与保存位置；只有用户明确确认当前计划后才调用 `batch_submit(confirm=true)`。结果查询或下载失败应恢复原任务，避免重复收费。

## 许可

上游二进制与指南的权利归原权利人所有；此仓库未收到上游开源许可，不将它们重新声明为 MIT、Apache 等开源软件。再分发与市场上架仍需符合上游条款；本仓库不授予上游软件的额外权利。
