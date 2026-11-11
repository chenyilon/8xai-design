# 种草秀 · 种草秀

功能标识：`buyer_show.generate`

用人物与服装参考制作种草秀

先确认：面向哪种使用场景，几个人物，偏自然生活还是商品展示？

图片用途：

- `modelImages`：人物或模特参考
- `clothingImages`：服装参考；素材处理/镜头功能中是待处理原图
- `sceneImages`：场景参考

限制：此功能使用预设字段，不接收非空 userPrompt

调用 `usage_guide(variant="buyer_show.generate")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
