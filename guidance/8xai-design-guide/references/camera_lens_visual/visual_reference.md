# 相机镜头 · 相机镜头·示意图引用

功能标识：`camera_lens_visual.visual_reference`

依据镜头可视化参考调整图像

先确认：哪张是待调整图，哪张是镜头或构图参考？

图片用途：

- `clothingImages`：需要改变镜头或构图的原图
- `visualizationImages`：镜头与构图参考

限制：必须提供 visualizationImages 参考通道

调用 `usage_guide(variant="camera_lens_visual.visual_reference")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
