export const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
    headerMenu = document.querySelector('.header-menu');

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle("burger--active");
    headerMenu.classList.toggle('header-hide');
	});

};
