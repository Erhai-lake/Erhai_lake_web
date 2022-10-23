var url = "/json/index.json"
// 申明一个XMLHttpRequest
var request = new XMLHttpRequest();
// 设置请求方法与路径
request.open("get", url);
// 不发送数据到服务器
request.send(null);
//XHR对象获取到返回信息后执行
request.onload = function () {
    // 解析获取到的数据
    var data = JSON.parse(request.responseText);
    // 网页标题
    document.getElementById('title').innerHTML = data.title

    // 图标
    var icon = document.getElementById('icon');
    icon.setAttribute('href', "/images/logo/" + data.icon);

    // 背景图片API
    $("#background_url").css({ "backgroundImage": "url(" + data.background_url + ")" });

    // 一言
    fetch(data.hitokotoAPI)
        .then(response => response.json())
        .then(data => {
            const hitokoto = document.getElementById('hitokoto_text')
            hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
            hitokoto.innerText = data.hitokoto + "-" + data.from_who + "[" + data.from + "]"
        })
        .catch(console.error)


    // 加载动画主标题
    document.getElementById('load_title1').innerHTML = data.load_title[0]
    // 加载动画副标题
    document.getElementById('load_title2').innerHTML = data.load_title[1]

    // 导航栏1标题
    document.getElementById('navigation1_title').innerHTML = data.navigation_title[0]
    // 导航栏2标题
    document.getElementById('navigation2_title').innerHTML = data.navigation_title[1]
    // 导航栏3标题
    document.getElementById('navigation3_title').innerHTML = data.navigation_title[2]

    // 标签1主标题
    document.getElementById('label1_title').innerHTML = data.label_title[0]
    // 标签2主标题
    document.getElementById('label2_title').innerHTML = data.label_title[1]
    // 标签3主标题
    document.getElementById('label3_title').innerHTML = data.label_title[2]

    // 导航按钮1
    document.getElementById('navigation1').innerHTML = data.navigation[0]
    // 链接
    var navigation_1 = document.getElementById('navigation_1');
    navigation_1.setAttribute('href', data.navigation[1]);

    // 导航按钮2
    document.getElementById('navigation2').innerHTML = data.navigation[2]
    // 链接
    var navigation_2 = document.getElementById('navigation_2');
    navigation_2.setAttribute('href', data.navigation[3]);

    // 导航按钮3
    document.getElementById('navigation3').innerHTML = data.navigation[4]
    // 链接
    var navigation_3 = document.getElementById('navigation_3');
    navigation_3.setAttribute('href', data.navigation[5]);

    // 导航按钮4
    document.getElementById('navigation4').innerHTML = data.navigation[6]
    // 链接
    var navigation_4 = document.getElementById('navigation_4');
    navigation_4.setAttribute('href', data.navigation[7]);

    // 导航按钮5
    document.getElementById('navigation5').innerHTML = data.navigation[8]
    // 链接
    var navigation_5 = document.getElementById('navigation_5');
    navigation_5.setAttribute('href', data.navigation[9]);

    // 导航按钮6
    document.getElementById('navigation6').innerHTML = data.navigation[10]
    // 链接
    var navigation_6 = document.getElementById('navigation_6');
    navigation_6.setAttribute('href', data.navigation[11]);
}