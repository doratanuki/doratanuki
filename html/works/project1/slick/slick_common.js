$(function () {
  var $slider5 = $('.sec1-img-list');
 
  $slider5.slick({
    arrows: false, // 前・次のボタンを表示しない
    dots: true, // ドットナビゲーションを表示する
    appendDots: $('.dots'), // ドットナビゲーションの生成位置を変更
    fade: true, // スライド切り替えをフェード
    autoplay: false, //自動再生させない
    slidesToShow: 1, // 表示させるスライド数
  });
 
  /*--- プログレスバー設定 -----------------------*/
  var
    time = 3,/*時間*/
    $bar = $('.dots .slick-dots li.slick-active button'),
    isPause,
    tick,
    percentTime;
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar = $('.dots .slick-dots li.slick-active button');
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slider5.slick('slickNext');
        startProgressbar();
      }
    }
  }
  function resetProgressbar() {
    $bar = $('.dots .slick-dots li.slick-active button');
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  startProgressbar();
   
  // カーソルが乗ったら止める
  //false
  $slider5.on({
    mouseenter: function () { isPause = false; },
    mouseleave: function () { isPause = false; }
  });
   
  // ドットがクリックされたら再発火(スライド切り替え前のイベント)
  $slider5.on('beforeChange', function (slick, currentSlide, nextSlide) {
    startProgressbar();
  });
});