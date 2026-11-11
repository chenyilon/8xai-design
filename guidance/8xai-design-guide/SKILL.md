---
name: 8xai-design-guide
description: 引导用户通过八象 8XAI MCP 制作或修改服装、人物与场景图像，包括模糊需求澄清、功能选择、素材用途确认、预演、提交与结果恢复。用于八象图像工作流，不处理视频。
---

# 八象图像使用引导

支持 MCP 工具的客户端可直接使用 usage_guide / intent_guide；工具名称可能带客户端前缀。
本 skill 是公开操作指南，不包含服务端核心生图提示词。

## 从模糊意图到可确认任务

结合对话和可见图片理解需求。先区分用户想改变的内容、必须保留的内容和图片各自用途。
不要把“做高级一点”直接解释为换脸、换背景或大批生成；只给路径时不能假装看过图片。
将推断与已确认事实分开。否定句、多个目标和前后冲突先澄清；用户修正后更新理解。
用户只说“和之前一样”时引用已有明确设置，缺失的部分再问，不让用户重复填写整张表。

每轮只问 1–2 个决定结果的关键问题，提供日常语言选项和一项推荐，解释推荐理由。
不知道参数时先推荐当前功能默认设置与少量输出；推荐不等于用户已确认，也不表示免费。
功能方向确定后再问缺少的素材和细节；不要一开始罗列 57 个功能或所有参数。
用户有充分明确需求时直接沿用，不机械重复采访。

调用 intent_guide 整理需求；context 只携带已确认的 goal、preserve、direction、roles_confirmed、output_root。
候选词是提示，最终由你结合语义理解选 variant；相似功能先解释差异，不自动选第一个。
按下面目录只读取当前页签和功能说明，再用 usage_guide 获取实时 schema、状态和限制。
预设通过 feature_options 分页查询。不要编造模型、尺寸、预设 ID 或不支持的能力。

## 预演、提交与交付

先 auth_status；需要时引导用户主动登录，不复述凭据。引导与 batch_plan 都不联网生图。
用 batch_plan 校验已确认参数；预演后用一句话复述修改项、保留项、素材用途、模型尺寸、总生成数、可能分析费和保存位置。
只有用户明确确认该计划时才 batch_submit(confirm=true)。修改参数后重新预演，旧确认不能套用新计划。
unknown/submitting 不自动重提或新建计划补交。有 taskId 时只查询和恢复下载，没有时请核实远端是否受理。
用 results_save 按服装组或来源文件夹保存，只交付图片。收集完成不等于视觉验收通过。

## 按需读取

[登录、模型选项、预演、结果、恢复、裁剪回贴、账户与安装](references/common.md)

- [整图矩阵](references/full_gen/index.md)
- [整图单张](references/full_single/index.md)
- [服装更换](references/clothing_swap/index.md)
- [局部细节](references/detail_repair/index.md)
- [元素迁移](references/element_migration/index.md)
- [五官造型](references/facial_features/index.md)
- [模特身材](references/model_body/index.md)
- [图像复刻](references/image_recreate/index.md)
- [动作复刻](references/action_recreate/index.md)
- [种草秀](references/buyer_show/index.md)
- [素材处理](references/material_processing/index.md)
- [美学灵感](references/aesthetic_inspiration/index.md)
- [套图裂变](references/set_image_fission/index.md)
- [相机镜头](references/camera_lens_visual/index.md)
- [自由矩阵](references/free_matrix/index.md)
