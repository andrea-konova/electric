export const popupSlider = () => {
	new Swiper('.project-2', {
    loop: true,
    slidesPerView: 1,
		navigation: {
			nextEl: '.project-1-prev',
			prevEl: '.project-1-next',
    }
	});
};
