function fadeAnime(){

    $(".hobby").each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });

    $(".hobby").each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeDown');
        }else{
            $(this).removeClass('fadeDown');
        }
    });

}

$(window).scroll(function(){
    fadeAnime();
});

$(window).on('load',function(){
    fadeAnime();
});
