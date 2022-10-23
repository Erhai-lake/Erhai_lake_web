var date = new Date();
var y = date.getFullYear();
var m = date.getMonth()+1;
var d = date.getDate();
var pass1 = Date.parse('2022/9/20'); //开始的日期
var pass2 = Date.parse(y+'/'+m+'/'+d); //当前日期
var time = (pass2-pass1)/(1000*60*60*24); //过去的天数
var timer =(time +"天");
window.onload=function(){
    document.getElementById('timer').innerHTML=(time +"天");
}