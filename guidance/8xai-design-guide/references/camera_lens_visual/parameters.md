# 相机镜头 · 相机镜头·参数

功能标识：`camera_lens_visual.parameters`

通过摄影参数改变图像视角与构图

先确认：想改变机位、远近还是画面构图？可用日常语言描述

图片用途：

- `clothingImages`：需要改变镜头或构图的原图
- `visualizationImages`：镜头与构图参考

限制：输出是图像，不会打开可操控的 3D 摄影窗口

调用 `usage_guide(variant="camera_lens_visual.parameters")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
