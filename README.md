# Erhai_lake_official_website

洱海工作室官网（简体中文）

<<<<<<< HEAD
<p><strong><h2>洱海工作室官网</h2></strong>简单的小主页</p>

![洱海工作室の导航页](https://erhai-lake.github.io/Erhai_lake_official_website/)

网站几乎所有的数据都由 json 管理

### 功能

导航页

- [x] 载入动画
- [x] 随机壁纸
- [x] 存活时间（在 js/timer.js 中可以调整）
- [x] 禁用开发者模式
- [x] json 控制
- [x] 移动端适配
- [x] 一言

* [ ] 还没想好呢（可以提建议）

项目站

- [x] 随机壁纸
- [x] json 控制
- [x] 禁用开发者模式
- [x] 图片滚动
- [x] 移动端适配

* [ ] 还没想好呢（可以提建议）

官方文档（摆了摆了）

- [x] 禁用开发者模式

* [ ] 还没想好呢（可以提建议）

投食站

- [x] 动态渐变背景
- [x] 二维码支持微信和支付宝
- [x] 移动端适配

* [ ] 还没想好呢（可以提建议）

### 配置

本项目采用 `json` 文件来配置站点内容，可将自定义配置写入 json 文件夹里的 `******.json` 以更改页面内容

有想法的朋友可以捣鼓个读写 json 的后台管理，然后开源，这样我就可以摆烂了（不是）

<!-- <details>
<summary>配置说明</summary>

/json/index.json

{
    "title": "网页标题",
    "icon": "图标",（填图片名字要加后缀，图标放在 /images/logo/ 里）
    "background_url": "背景图片API",（推荐两个二刺猿的API https://api.ixiaowai.cn/api/api.php  http://www.dmoe.cc/random.php）
    "hitokotoAPI":"https://v1.hitokoto.cn",
    "load_title": [
        "加载动画主标题",
        "加载动画副标题"
    ],
    "navigation_title": [
        "导航栏1标题",
        "导航栏2标题",
        "导航栏3标题"
    ],
    "label_title": [
        "标签1主标题",
        "标签2主标题",
        "标签3主标题"
    ],
    "navigation": [
        "导航按钮1标题",
        "导航按钮1链接",
        "导航按钮2标题",
        "导航按钮2链接",
        "导航按钮3标题",
        "导航按钮3链接",
        "导航按钮4标题",
        "导航按钮4链接",
        "导航按钮5标题",
        "导航按钮5链接",
        "导航按钮6标题",
        "导航按钮6链接"
    ]
}

/json/project.json

{
    "title": "网页标题",
    "icon": "图标",（填图片名字要加后缀，图标放在 /images/logo/ 里）
    "background_url": "背景图片API",（推荐两个二刺猿的API https://api.ixiaowai.cn/api/api.php  http://www.dmoe.cc/random.php）
    "background1": [
        "项目1的图片",（填图片名字要加后缀，图标放在 /images/project/ 里）
        "项目1的主标题",
        "项目1的副标题",
        "项目1的链接"
    ],
    "background2": [
        "项目2的图片",（填图片名字要加后缀，图标放在 /images/project/ 里）
        "项目2的主标题",
        "项目2的副标题",
        "项目2的链接"
    ],
    "background3": [
        "项目3的图片",（填图片名字要加后缀，图标放在 /images/project/ 里）
        "项目3的主标题",
        "项目3的副标题",
        "项目3的链接"
    ],
    "background4": [
        "项目4的图片",（填图片名字要加后缀，图标放在 /images/project/ 里）
        "项目4的主标题",
        "项目4的副标题",
        "项目4的链接"
    ],
    "background5": [
        "项目5的图片",（填图片名字要加后缀，图标放在 /images/project/ 里）
        "项目5的主标题",
        "项目5的副标题",
        "项目5的链接"
    ]
}
</details> -->