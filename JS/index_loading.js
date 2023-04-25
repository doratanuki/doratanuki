$(window).on('load',function(){
    $("#loading").delay(2000).fadeOut('slow');
    $("#loading-logo img").delay(1800).animate({width : '180px'},1000);
    $("#loading-text").animate({left : '150%'},3000);
});

