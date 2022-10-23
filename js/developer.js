//禁用F12
window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    // 判断是否按下F12，F12键码为123
    if (event.keyCode == 123) {
    event.preventDefault(); // 阻止默认事件行为
    window.event.returnValue = false;
    }
}
//禁用调试工具
var threshold = 160; // 打开控制台的宽或高阈值
// 每秒检查一次
var check = setInterval(function() {
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
        // 如果打开控制台，则刷新页面
        window.location.reload();
    }
}, 1000)
//屏蔽右键菜单
document.oncontextmenu = function (event){
    if(window.event){
    event = window.event;
    }
    try{
    var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
    }
    catch (e){
        return false;
    }
}
//屏蔽选中
document.onselectstart = function (event){
    if(window.event){
        event = window.event;
        }
    try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        } 
    catch (e) {
        return false;
    }
}
//屏蔽复制
document.oncopy = function (event){
    if(window.event){
    event = window.event;
    }
    try{
        var the = event.srcElement;
        if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        }
    catch (e){
        return false;
    }
}
//屏蔽剪贴
document.oncut = function (event){
    if(window.event){
    event = window.event;
    }
    try{
        var the = event.srcElement;
        if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        }
    catch (e){
        return false;
    }
}
//屏蔽粘贴
document.onpaste = function (event){
    if(window.event){
        event = window.event;
        }
    try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
        return false;
        }
        return true;
        }
    catch (e){
        return false;
    }
}