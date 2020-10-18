export const feedbackSlider = () => {
	new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      760: {
        slidesPerView: 2
      }
    }
	});
};
