export const popup = () => {
	const body = document.querySelector('body'),
		popupCall = document.querySelector('.popup-call'),
		popupQuestion = document.querySelector('.popup-question');

	body.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.popup-call-button')) {
			popupCall.style.display = 'block';
		}

		if (target.matches('.popup-question-button')) {
			popupQuestion.style.display = 'block';
		}

		if (target.matches('.popup-close')) {
			popupCall.style.display = 'none';
			popupQuestion.style.display = 'none';
		}
	});
};
