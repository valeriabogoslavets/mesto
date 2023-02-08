import  Popup  from "./Popup.js"
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector)
        this._handleSubmitForm = handleSubmitForm
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
     this._saveButton = this._popup.querySelector('.popup__button_save')
     this._anotherButton = this._saveButton.textContent
     
    }
    
    _getInputValue() {
      this._formValues = {};
      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
    });
        return this._formValues;
      }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this.isLoading(true)
          this._handleSubmitForm(this._getInputValue() );
        })
      }
      
    isLoading(loading) {
      if(loading) {
        this._saveButton.textContent = 'Сохранение...'
      }else {
        this._saveButton.textContent = this._anotherButton;
      }
    }
    close(){
      super.close();
      this._form.reset()
    }
}
