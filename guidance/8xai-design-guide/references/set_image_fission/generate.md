# 套图裂变 · 套图裂变

功能标识：`set_image_fission.generate`

围绕原图扩展成套系列图片

先确认：一套中允许改变动作、场景、视角还是风格？

图片用途：

- `originalImages`：待修改并保留主体的原图
- `referenceImages`：辅助方向参考
- `identityImages`：人物身份参考

限制：view 与 close 互斥；smart 美学方向不能混选其他方向

调用 `usage_guide(variant="set_image_fission.generate")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
