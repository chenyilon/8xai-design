# 图像复刻 · 背景复刻

功能标识：`image_recreate.background_recreate`

依据背景参考重建原图背景

先确认：保留哪张原图主体，使用哪张背景作为参考？

图片用途：

- `sourceImages`：构图、动作或美学来源图（按功能确认）
- `backgroundImages`：背景参考
- `modelImages`：人物或模特参考

限制：与只迁移风格或光照区分

调用 `usage_guide(variant="image_recreate.background_recreate")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
