$(function(){
    var width=$(window).width();
    var height=$(window).height();
    var anniu =$(".nav-top-line button")
    anniu.click(function(){
        $(".nav-collb").css({
            width:width,
            height:height,
        })
        $(".nav-collb").slideToggle(200);
    })
})