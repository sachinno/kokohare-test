// フェードイン
new WOW().init();

// スムーススクロール
$('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
});

// ドロワー開閉
$(function () {
    $(".navbar_toggle, .menu ul li a").on("click", function () {
        $('.navbar_toggle, .menu').toggleClass('open');
    });
});

// ヘッダー変化
$(function () {
    var $win = $(window),
        $header = $('header'),
        animationClass = 'header-scroll';

    $win.on('load scroll', function () {
        var value = $(this).scrollTop();
        if (value > 100) {
            $header.addClass(animationClass);
        } else {
            $header.removeClass(animationClass);
        }
    });
});