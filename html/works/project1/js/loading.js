//ローディング画面
//logoの表示
$(window).on('load',function(){
    $("#splash").delay(2500).fadeOut('slow');//ローディング画面を2.5秒（2500ms）待機してからフェードアウト
    $("#splash_logo").delay(2500).fadeOut('slow');//ロゴを2.5秒（2500ms）待機してからフェードアウト
});
