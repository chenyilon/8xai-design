# MCP 公共操作

## 从一句话和图片开始（start）

`usage_guide(topic="start")`

- 先说你想得到什么、哪些必须保留；不懂页签名称也可以
- AI 每轮只追问 1–2 个关键问题，给出日常语言选项和建议
- 确认图片用途后，说明推荐功能、默认设置与可能的分析费用
- 本地预演后复述总生成数、修改和保留范围，得到明确确认再提交

## 登录与本机凭据（auth）

`usage_guide(topic="auth")`

- 只使用用户主动提供的凭据，不在回复中复述
- Windows 使用 DPAPI，macOS 使用钥匙串；本机状态不是远端会话验证

工具：auth_status、auth_login、auth_relogin、auth_logout

## 选页签、功能、预设、模型与尺寸（options）

`usage_guide(topic="options")`

- 以运行中的 schema 与分页目录为准，不凭名称编造预设 ID
- 不同模型不一定支持同样尺寸，未知费用不能假定免费

工具：tabs_list、usage_guide、feature_options

## 预演与费用确认（preview）

`usage_guide(topic="preview")`

- 引导和预演不上传、不分析、不生图
- 生成数量不含分析费或本地裁图数；实际费用以远端账单为准
- 修改参数后重新预演；只有用户明确确认当前计划才提交 confirm=true

工具：intent_guide、batch_plan、batch_submit

## 查询并保存结果（results）

`usage_guide(topic="results")`

- 按服装组或源文件夹名保存，只交付图片
- complete 表示收集完成，图像效果仍需检查
- 下载失败恢复原任务，不重新生成

工具：plan_status、job_status、results_save

## 失败、超时和未知状态恢复（recovery）

`usage_guide(topic="recovery")`

- unknown/submitting 不能重提或换计划自动补交，先核对已知任务
- 有 taskId 时只查询和恢复下载；没有 taskId 时人工核实远端是否受理
- 分析成功但生成未明也不能盲目重试

工具：plan_status、job_status、results_save

## 裁剪、智能回贴与宫格裁图（local_edit）

`usage_guide(topic="local_edit")`

- 只有当前 schema 暴露且状态 ready 的编辑能力才可使用
- 裁剪坐标对应原图尺寸，回贴原图和来源必须明确
- 智能回贴接缝、遮挡与重影需要目视检查；姿态不保证精准还原

工具：usage_guide、batch_plan、results_save

## 账户与余额（account）

`usage_guide(topic="account")`

- 查询可能访问远端；余额不等于具体任务准确报价

工具：account_info

## 安装、升级与客户端使用（installation）

`usage_guide(topic="installation")`

- 重启支持本地 stdio MCP 的客户端，先说：请用八象引导我，我想处理这张图
- 支持 skill 的客户端按需加载 8xai-design-guide；其他客户端通过 usage_guide / intent_guide 获得相同指导
- 客户端能否主动反问由其模型和工具权限决定，服务无法强制所有客户端按同样方式对话
- Mac 安装失败请提供 stage 与 curl 错误码，不提供密码；compdef 属于 zsh 补全配置，与 MCP 下载失败分开处理
- 更新和回滚使用安装器；保留原账户、素材和任务记录，不重新生成旧任务
