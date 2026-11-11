# 动作复刻 · 动作迁移

功能标识：`action_recreate.migrate`

分析姿态参考后迁移到目标人物

先确认：哪张是要保留的人物，哪张只提供姿态？

图片用途：

- `targetImages`：待改变姿态的目标人物图
- `poseImages`：姿态参考
- `modelImages`：人物或模特参考

限制：成功传入姿态图不保证严格还原关节位置

调用 `usage_guide(variant="action_recreate.migrate")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
