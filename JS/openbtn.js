$(function(){
    $(".openbtn").on("click",function(){
        $(this).toggleClass('active');
        $(".open-menu").toggleClass('panelactive');
        $(".open-menu-background").toggle()

        if ($(".openbtn").hasClass('active')) {
            $(".open-menu-background").on("click",function(){
                $(".openbtn").removeClass('active');
                $(".open-menu").removeClass('panelactive');
                $(".open-menu-background").hide()
            })
        }
    });

    $(".open-menu-item").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $(".open-menu").removeClass('panelactive');

    });
});