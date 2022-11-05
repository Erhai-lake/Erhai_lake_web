//这是根据js判断，页面加载完毕就显示
document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        $(".loading-div").hide();
        $('body').css('overflow','scroll');
    }
  }