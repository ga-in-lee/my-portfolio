$(document).ready(function () {
    $('.loading_page').delay(3000);
    $('.loading_page').fadeOut(1000);

    new fullpage('#fullpage', {
        // 옵션 설정
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#menu',
        scrollingSpeed: 1000,
        fixedElements: '#header'
    });

    const swiper1 = new Swiper('.swiper', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });
});