# 美学灵感 · 美学灵感·设计

功能标识：`aesthetic_inspiration.design`

按设计方向制作美学灵感图

先确认：设计用于什么商品或主题，主要氛围是什么？

图片用途：

- `sourceImages`：构图、动作或美学来源图（按功能确认）
- `styleImages`：美学设计的风格参考图，用于分析方向

限制：美学模型仅支持该功能 schema 列出的尺寸

调用 `usage_guide(variant="aesthetic_inspiration.design")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
