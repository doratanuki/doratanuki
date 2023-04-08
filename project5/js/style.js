$(function(){
    $('.list-frame > .English-spelling').click(function(){
        $(this).addClass("hide")
        $(this).siblings(".Japanese-spelling").removeClass("hide")
    });
    $('.list-frame > .Japanese-spelling').click(function(){
        $(this).addClass("hide")
        $(this).siblings(".English-spelling").removeClass("hide")
    });
});

