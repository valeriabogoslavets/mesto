//Валидация форм
export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._inputSelector = config.inputSelector
        this._submitButtonSelector = config.submitButtonSelector
        this._inactiveButtonClass = config.inactiveButtonClass
        this._inputErrorClass = config.inputErrorClass
        this._errorClass = config.errorClass
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector)
    }

    _hasValidateInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid
        })
    }
    _showInputError = (input) => {
        const formError = this._form.querySelector(`.${input.id}-error`);
        input.classList.add(this._config.inputErrorClass);
        formError.classList.add(this._config.errorClass);
        formError.textContent = input.massage;
    }

    _hideInputError = (input) => {
        const formError = this._form.querySelector(`.${input.id}-error`);
        input.classList.remove(this._config.inputErrorClass);
        formError.classList.remove(this._config.errorClass);
        formError.textContent = '';
    };
    _isValid = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input)
        }
    };

    _toggleButtonState() {
        if (this._hasValidateInput()) {
            this._button.classList.add(this._inactiveButtonClass)
            this._button.disabled = true;
        } else {
            this._button.classList.remove(this._inactiveButtonClass)
            this._button.disabled = false;
        }
    }
    _setEventListeners() {
        this._toggleButtonState()
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input)
                this._toggleButtonState()
            })
        })
    }

    enValidation() {
this._form.addEventListener('submit', (evt)  => {
    evt.preventDefault();
    evt.target.reset();
})
    this._setEventListeners();
}
resValidation() {
    this.__inputList.forEach((input) => {
        this.__hideInputError(input)
    });
    this._toggleButtonState()
}
}