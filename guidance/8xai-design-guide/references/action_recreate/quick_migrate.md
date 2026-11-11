# 动作复刻 · 快速动作迁移

功能标识：`action_recreate.quick_migrate`

快速将姿态参考用于目标图

先确认：更看重快速尝试，还是先分析姿态的细节？

图片用途：

- `targetImages`：待改变姿态的目标人物图
- `poseImages`：姿态参考
- `modelImages`：人物或模特参考

限制：快速与分析模式的步骤和费用不同

调用 `usage_guide(variant="action_recreate.quick_migrate")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
