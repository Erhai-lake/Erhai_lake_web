# Erhai_lake_web

洱海工作室官网（简体中文）

<p><strong><h2>洱海工作室官网</h2></strong>简单的小官网</p>

![洱海工作室の导航页](https://erhai-lake.github.io/Erhai_lake_web/)

网站几乎所有的数据都由 `json` 管理

## 功能

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

- [ ] 还没想好呢（可以提建议）

投食站

- [x] 动态渐变背景
- [x] 移动端适配

* [ ] 还没想好呢（可以提建议）

## json 配置

本项目采用 `json` 文件来配置站点内容，可将自定义配置写入 json 文件夹里的 `******.json` 以更改页面内容

有想法的朋友可以捣鼓个读写 `json` 的后台管理，然后开源，这样我就可以摆烂了（不是）

## 配置说明

看 README.md

<!--
导航页（index.json）
{
    "title": "浏览器标题",
    "background_url": "随机背景的API",  （https://www.cnblogs.com/taoxiaoxin/p/14532459.html）
    "hitokotoAPI": "一言的API", （https://developer.hitokoto.cn/）
    "icon": [
        "浏览器图标",   （文件放在 images/logo/ 文件夹里，要记得打后缀）
        "logo"  （文件放在 images/logo/ 文件夹里，要记得打后缀）
    ],
    "load_title": [
        "加载界面主标题",
        "加载界面副标题"
    ],
    "navigation_title": [
        "导航栏标题1",
        "导航栏标题2",
        "导航栏标题3"
    ],
    "label_title": [
        "洱海工作室",
        "关于",
        "求投食！"
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

投食页（sponsor.json）
{
    "title": "浏览器标题",
    "icon": "浏览器图标",   （文件放在 images/logo/ 文件夹里，要记得打后缀）
    "text":"标题",
    "img":"二维码图片"  （文件放在 images/ 文件夹里，要记得打后缀）
}

项目页（project.json）
{
    "title": "浏览器标题",
    "icon": "浏览器图标",   （文件放在 images/logo/ 文件夹里，要记得打后缀）
    "background_url": "随机背景的API",  （https://www.cnblogs.com/taoxiaoxin/p/14532459.html）
    "background1": [
        "项目1图片",    （文件放在 images/project/ 文件夹里，要记得打后缀）
        "项目1主标题",
        "项目1副标题",
        "项目1跳转链接"
    ],
    "background2": [
        "项目5图片",    （文件放在 images/project/ 文件夹里，要记得打后缀）
        "项目2主标题",
        "项目2副标题",
        "项目2跳转链接"
    ],
    "background3": [
        "项目5图片",    （文件放在 images/project/ 文件夹里，要记得打后缀）
        "项目3主标题",
        "项目3副标题",
        "项目3跳转链接"
    ],
    "background4": [
        "项目5图片",    （文件放在 images/project/ 文件夹里，要记得打后缀）
        "项目4主标题",
        "项目4副标题",
        "项目4跳转链接"
    ],
    "background5": [
        "项目5图片",    （文件放在 images/project/ 文件夹里，要记得打后缀）
        "项目5主标题",
        "项目5副标题",
        "项目5跳转链接"
    ]
}
 -->
