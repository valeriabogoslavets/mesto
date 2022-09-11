//Валидация форм
//функция добавления класса с ошибкой
function showInputError(form, input, message, config) {
    const formError = form.querySelector(`.${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    formError.classList.add(config.errorClass);
    formError.textContent = message;
}

//функция удаления класса с ошибкой
function hideInputError(form, input, config) {
    const formError = form.querySelector(`.${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    formError.classList.remove(config.errorClass);
    formError.textContent = '';
}

//Функция которая проверяет валидность поля
function isValid(form, input, config) {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage, config);
    } else {
        hideInputError(form, input, config)
    }
}

//Проверка на валидность инпутов
function hasValidateInput(inputList) {
    return inputList.some((input) => {
        return !input.validity.valid
    })
};

//Кнопка 
// функция добавления атрибута disabled
function setButtonInActive(button) {
    button.classList.add(validationConfig.inactiveButtonClass)
   button.disabled = true;
}
// функция удаления атрибута disabled
function setButtonActive(button)  {
    button.classList.remove(validationConfig.inactiveButtonClass)
   button.disabled = false;
}



function toggleButtonState(inputList, button) {
    if (hasValidateInput(inputList)) {
       setButtonInActive(button)
    } else {
       setButtonActive(button)
    }
};


//Функция нахождения инпутов
function setHendlers(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector)
    toggleButtonState(inputList, button,config);
    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(form, input, config);
            toggleButtonState(inputList, button, config);
        });

    });
}
//Функция нахождения форм

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        setHendlers(form, config)
    })
}

enableValidation(validationConfig);