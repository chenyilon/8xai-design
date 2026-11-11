# 素材处理 · 面部宫格

功能标识：`material_processing.face_grid`

制作人物脸部宫格素材

先确认：要同一人物的脸部素材，还是重新设计人物？

图片用途：

- `clothingImages`：需要处理的原图（可以是人物、服装或场景，不一定是衣服）

限制：输入字段 clothingImages 在这里实际放人物素材

调用 `usage_guide(variant="material_processing.face_grid")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
