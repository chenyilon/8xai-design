# 动作复刻 · 动作提取

功能标识：`action_recreate.extract`

从图片提取姿态方向并生成动作结果

先确认：你要姿态素材图，还是人物动作生成结果？

图片用途：

- `sourceImages`：构图、动作或美学来源图（按功能确认）

限制：若要姿态素材，考虑素材处理的 extract_pose

调用 `usage_guide(variant="action_recreate.extract")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
