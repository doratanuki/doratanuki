function fadeAnime(){
    $(".profile .section-title").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });


    $(".profile img").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 50 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
    $(".profile .profile-img-text").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 100 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });

    $(".profile h3").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 130 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
    $(".profile p").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 130 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });

    $(".career .section-title").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 130 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
    
    $(".career .career-list").each(function(){
        var Offset = $(this).offset().top;
        var ScrollTop = $(window).scrollTop();
        var WindowHeight = $(window).height();
        if(Offset - 130 <= ScrollTop + WindowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
}

$(window).scroll(function(){
    fadeAnime();
});