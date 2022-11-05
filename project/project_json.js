var url = "/json/project.json"
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

    // 项目1
    // 图片
    $("#background1_1").css({ "backgroundImage": "url(" + "/images/project/" + data.background1[0] + ")" });
    // 主标题
    document.getElementById('background1_2').innerHTML = data.background1[1]
    // 副标题
    document.getElementById('background1_3').innerHTML = data.background1[2]
    // 链接
    var background1_4 = document.getElementById('background1_4');
    background1_4.setAttribute('href', "/project/" + data.background1[3]);

    // 项目2
    // 图片
    $("#background2_1").css({ "backgroundImage": "url(" + "/images/project/" + data.background2[0] + ")" });
    // 主标题
    document.getElementById('background2_2').innerHTML = data.background2[1]
    // 副标题
    document.getElementById('background2_3').innerHTML = data.background2[2]
    // 链接
    var background2_4 = document.getElementById('background1_4');
    background2_4.setAttribute('href', "/project/" + data.background2[3]);

    // 项目3
    // 图片
    $("#background3_1").css({ "backgroundImage": "url(" + "/images/project/" + data.background3[0] + ")" });
    // 主标题
    document.getElementById('background3_2').innerHTML = data.background3[1]
    // 副标题
    document.getElementById('background3_3').innerHTML = data.background3[2]
    // 链接
    var background3_4 = document.getElementById('background3_4');
    background3_4.setAttribute('href', "/project/" + data.background3[3]);

    // 项目4
    // 图片
    $("#background4_1").css({ "backgroundImage": "url(" + "/images/project/" + data.background4[0] + ")" });
    // 主标题
    document.getElementById('background4_2').innerHTML = data.background4[1]
    // 副标题
    document.getElementById('background4_3').innerHTML = data.background4[2]
    // 链接
    var background4_4 = document.getElementById('background4_4');
    background4_4.setAttribute('href', "/project/" + data.background4[3]);

    // 项目5
    // 图片
    $("#background5_1").css({ "backgroundImage": "url(" + "/images/project/" + data.background5[0] + ")" });
    // 主标题
    document.getElementById('background5_2').innerHTML = data.background5[1]
    // 副标题
    document.getElementById('background5_3').innerHTML = data.background5[2]
    // 链接
    var background5_4 = document.getElementById('background5_4');
    background5_4.setAttribute('href', "/project/" + data.background5[3]);
}