export const smoothScroll = () => {
	const menu = document.querySelector('.menu');

	menu.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			const menuId = target.getAttribute('href').substring(1);

			document.getElementById(menuId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
  });
  
  const headerMenu = document.querySelector('.header-menu');

	headerMenu.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			const headerMenuId = target.getAttribute('href').substring(1);

			document.getElementById(headerMenuId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
};
