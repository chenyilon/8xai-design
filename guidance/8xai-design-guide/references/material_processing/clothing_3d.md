# 素材处理 · 服装转3D

功能标识：`material_processing.clothing_3d`

制作服装立体展示效果

先确认：要哪类服装、常规还是参考辅助立体效果？

图片用途：

- `clothingImages`：需要处理的原图（可以是人物、服装或场景，不一定是衣服）
- `clothing3dReferenceImages`：服装立体效果参考

限制：输出为图像，不是可旋转的 3D 模型文件

调用 `usage_guide(variant="material_processing.clothing_3d")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
