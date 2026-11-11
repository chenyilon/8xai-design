# 素材处理 · 模卡三视图

功能标识：`material_processing.model_card_triple`

制作三联模特卡

先确认：三联展示哪些视角，人物与服装是否固定？

图片用途：

- `clothingImages`：需要处理的原图（可以是人物、服装或场景，不一定是衣服）

限制：三联布局与三次生成不是同一概念

调用 `usage_guide(variant="material_processing.model_card_triple")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
