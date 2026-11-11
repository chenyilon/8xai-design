# 素材处理 · OOTD搭配

功能标识：`material_processing.ootd`

按服饰槽位组合搭配图

先确认：每张素材分别是外套、内搭、裤子还是配饰？

图片用途：

- `ootdImages`：外套、内搭、裤子等命名服饰槽位

限制：使用 ootdImages 命名槽位，不能把所有图混成数组

调用 `usage_guide(variant="material_processing.ootd")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
