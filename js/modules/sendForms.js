export const sendForms = () => {

	const tel = document.querySelectorAll('input[type="tel"]');
	const telMask = new Inputmask('+38 (999) 999-99-99');
  telMask.mask(tel);
  
  const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
    popUpWindows = document.querySelectorAll('.popup');

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 1.5rem;';
	statusMessage.style.color = '#feb003';

	const hideStatusMessage = () => {
		statusMessage.style.display = 'none';
	};

	const hidePopup = () => {
		popUpWindows.forEach(elem => {
			elem.style.display = 'none';
		});
	};

	const validateForms = function(selector) {
		new window.JustValidate(selector, {
			rules: {
				name: {
					required: true,
					minLength: 2,
					maxLength: 15
				},
				tel: {
					required: true
        },
        mess: {
          required: true
        }
			},
			messages: {
				name: {
					required: 'Заполните поле имя',
					minLength: 'Имя не короче 2 символов',
					maxLength: 'Имя не длиннее 15 символов'
				},
				tel: {
					required: 'Заполните поле телефон'
        },
        mess: {
          required: 'Заполните поле сообщение'
        }
			},

			submitHandler(form, values, ajax) {
        form.appendChild(statusMessage);
        statusMessage.style.display = 'block';
        statusMessage.textContent = loadMessage;

				ajax({
					url: 'telegram.php',
					method: 'POST',
					data: values,
					async: true,
					callback: function (response) {
            statusMessage.textContent = successMessage;
            setTimeout(hideStatusMessage, 3000);
            setTimeout(hidePopup, 4000);
          },
          error: function (response) {
            statusMessage.textContent = errorMessage;
            setTimeout(hideStatusMessage, 3000);
            setTimeout(hidePopup, 4000);
            console.error(error);
          }
        });
        form.reset();
			},
		});
	};

  validateForms('.popup__form');
  validateForms('.popup-question__form');
	validateForms('.quote__form');
};
