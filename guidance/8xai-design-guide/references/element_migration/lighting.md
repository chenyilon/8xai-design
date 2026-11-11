# 元素迁移 · 迁移·布光

功能标识：`element_migration.lighting`

迁移参考光照

先确认：希望跟随参考光向、明暗还是整体色温？

图片用途：

- `originalImages`：待修改并保留主体的原图
- `productImages`：要迁入的服装、细节或元素参考
- `detailImages`：补充细节参考

限制：光照变化可能影响服装颜色观感

调用 `usage_guide(variant="element_migration.lighting")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
