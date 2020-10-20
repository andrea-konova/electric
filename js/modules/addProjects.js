export const  addProjects = () => {
	const addProjectsBtn = document.querySelector('.add-projects-button'),
    projects = document.getElementById('projects'),
		card = projects.querySelectorAll('.projects-item');

	addProjectsBtn.addEventListener('click', () => {
		addProjectsBtn.style.display = 'none';

		card.forEach((item, i) => {
			if (item.classList.contains('hidden')) {
				card[i].classList.remove('hidden');
			}
		});

	});
};
