export const feedbackSlider = () => {
	new Swiper('.feedback-container', {
    loop: true,
    slidesPerView: 2,
		navigation: {
			nextEl: '.feedback-button-next',
			prevEl: '.feedback-button-prev',
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
