/*ハンバーガーメニュー*/
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".header-menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".header-menu-item a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header-menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//ローディング画面
//logoの表示
$(window).on('load',function(){
    $("#splash").delay(3000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(2800).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });