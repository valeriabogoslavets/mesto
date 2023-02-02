//Валидация форм
export default class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector);
    
    }

   

    _hasValidateInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid
        })
    }
    _showInputError = (input) => {
        const formError = this._form.querySelector(`.${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        formError.classList.add(this._errorClass);
        formError.textContent = input.validationMessage;
    }

    _hideInputError = (input) => {
        const formError = this._form.querySelector(`.${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        formError.classList.remove(this._errorClass);
        formError.textContent = '';
    };
    _isValid = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input)
        }
    };
    //добавление дисаблед
    _setButtonInActive() {
        this._button.classList.add(this._inactiveButtonClass)
        this._button.disabled = true;
    }
    _setButtonActive() {
        this._button.classList.remove(this._inactiveButtonClass)
        this._button.disabled = false;
    }
    _toggleButtonState() {
        if (this._hasValidateInput()) {
            this._setButtonInActive()

        } else {
            this._setButtonActive()
        }
    }
    enableValidation() {
        this._toggleButtonState()

        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input)

                this._toggleButtonState()
            })
        })
    }
    
    resValidation() {
        this._inputList.forEach((input) => {
            this._hideInputError(input)
        });
        this._toggleButtonState()
    }
}
