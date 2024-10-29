var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        280:{
            slidesPerView: 1,
        },
        375:{
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    },
});