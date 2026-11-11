# 五官造型 · 五官造型·参数

功能标识：`facial_features.parameters`

用预设参数设计人物五官

先确认：需要什么年龄、性别和五官方向？不知道可先选自然写实方向

图片用途：

- `modelImages`：人物或模特参考

限制：预设 ID 从 feature_options 读取，不凭名称编造

调用 `usage_guide(variant="facial_features.parameters")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
