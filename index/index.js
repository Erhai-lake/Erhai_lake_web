$('.menu a').click(function(){
    target = $(this).attr('goto');
    switchTo(target);
    $('.menu li a').each(function(){
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});
function switchTo(target){
    $('.right section').each(function () {
        $(this).removeClass('active');
    });
    $(target).addClass('active');
}