var num = 128; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.top-menu').addClass('fixed');
    } else {
        $('.top-menu').removeClass('fixed');
    }
});