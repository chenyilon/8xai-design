# 动作复刻 · 动作裂变

功能标识：`action_recreate.fission`

从人物原图生成多种动作变化

先确认：只变化动作，还是场景与构图也允许变化？

图片用途：

- `sourceImages`：构图、动作或美学来源图（按功能确认）
- `faceImages`：脸部身份参考
- `detailImages`：补充细节参考

限制：宫格、方向与输出张数应分别确认

调用 `usage_guide(variant="action_recreate.fission")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
