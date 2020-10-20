export const feedbackSlider = () => {
	new Swiper('.feedback-container', {
    loop: true,
    slidesPerView: 2,
		navigation: {
			nextEl: '.feedback-button-prev',
			prevEl: '.feedback-button-next',
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
