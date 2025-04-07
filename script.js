document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 26.5,
        slidesPerView: 4,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1180: {
                slidesPerView: 4
            },
            900: {
                slidesPerView: 3
            },
            641: {
                slidesPerView: 2
            },
            10: {
                slidesPerView: 1
            },
        }
    });
});