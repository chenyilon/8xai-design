# 模特身材 · 模特身材

功能标识：`model_body.generate`

依据人物参考设计模特身材和展示角度

先确认：要改身高比例还是体型，是否保留当前脸和服装？

图片用途：

- `modelImages`：人物或模特参考
- `clothingImages`：服装参考；素材处理/镜头功能中是待处理原图
- `sceneImages`：场景参考

限制：服装提示字段与其他页签不同，以当前 schema 为准

调用 `usage_guide(variant="model_body.generate")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
