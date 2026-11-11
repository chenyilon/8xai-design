# 局部细节 · 局部细节·常规

功能标识：`detail_repair.regular`

修复图中指定部位并参考正确细节

先确认：要修哪一处，参考图中哪个细节才是正确的？

图片用途：

- `originalImages`：待修改并保留主体的原图
- `productImages`：要迁入的服装、细节或元素参考
- `detailImages`：补充细节参考

限制：先选 repairTarget；自定义目标需要具体说明

调用 `usage_guide(variant="detail_repair.regular")` 读取当前参数、数量限制、编辑状态；
有预设时用 feature_options 查询真实 ID，不在本说明复制参数默认值。
调用 intent_guide 时携带已确认的目标、保留项、方向和图片用途，避免重复追问。
先 batch_plan，再复述总生成数、可能分析费和保存位置；用户明确确认当前计划后才提交一次。
结果用原计划查询和保存，只交付图片；目视检查效果，失败不自动重新生图。
