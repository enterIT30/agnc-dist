if (document.querySelector('.influencers-slider')) {
    new Swiper('.influencers-slider', {

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                loop: true,
            },
            370: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                loop: true,
            },
            480: {
                slidesPerView: 2.2,
                spaceBetween: 15,
                loop: true,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                loop: true,
            },
            800: {
                slidesPerView: 3.5,
                spaceBetween: 30,
                loop: true,
            },
            1100: {
                slidesPerView: 4.7,
                spaceBetween: 30,
                loop: true,
            },
        },

        navigation: {
            nextEl: '.influencers__button_next',
            prevEl: '.influencers__button_prev',
        },

        pagination: {
            el: '.influencers__pagination',
        },
    });
}

