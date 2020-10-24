export const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
    headerMenu = document.querySelector('.header-menu');

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle("burger--active");
    headerMenu.classList.toggle('header-hide');
  });
  
  headerMenu.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			burgerBtn.classList.toggle("burger--active");
      headerMenu.classList.toggle('header-hide');
		}
  });

};
