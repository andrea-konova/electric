export const popup = () => {
	const body = document.querySelector('body'),
    popupCall = document.querySelector('.popup-call'),
    // popupPrice = document.querySelector('.popup-price'),
    popupQuestion = document.querySelector('.popup-question'),
    popupProject1 = document.querySelector('.popup-project-1'),
    popupProject2 = document.querySelector('.popup-project-2'),
    popupProject3 = document.querySelector('.popup-project-3'),
    popupProject4 = document.querySelector('.popup-project-4'),
    popupProject5 = document.querySelector('.popup-project-5'),
    popupProject6 = document.querySelector('.popup-project-6');

	body.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.popup-call-button')) {
			popupCall.style.display = 'block';
    }
    
    // if (target.matches('.popup-price-button')) {
		// 	popupPrice.style.display = 'block';
		// }

		// if (target.matches('.popup-price-call-button')) {
		// 	popupPrice.style.display = 'none';
		// 	popupCall.style.display = 'block';
		// }

		if (target.matches('.popup-question-button')) {
			popupQuestion.style.display = 'block';
    }

    if (target.matches('.project-btn-1')) {
			popupProject1.style.display = 'block';
		}
    
    if (target.matches('.project-btn-2')) {
			popupProject2.style.display = 'block';
    }
    
    if (target.matches('.project-btn-3')) {
			popupProject3.style.display = 'block';
    }
    
    if (target.matches('.project-btn-4')) {
			popupProject4.style.display = 'block';
    }
    
    if (target.matches('.project-btn-5')) {
			popupProject5.style.display = 'block';
    }
    
    if (target.matches('.project-btn-6')) {
			popupProject6.style.display = 'block';
		}

		if (target.matches('.popup-close')) {
      popupCall.style.display = 'none';
      // popupPrice.style.display = 'none';
      popupQuestion.style.display = 'none';
      popupProject1.style.display = 'none';
      popupProject2.style.display = 'none';
      popupProject3.style.display = 'none';
      popupProject4.style.display = 'none';
      popupProject5.style.display = 'none';
      popupProject6.style.display = 'none';
		}
	});
};
