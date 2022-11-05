import  Popup  from "./components/Popup.js"
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector)
        this._handleSubmitForm = handleSubmitForm
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
        this._formValues = {};
    }
    
    _getInputValue() {
      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
    });
        return this._formValues;
      }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleSubmitForm(this._getInputValue() );
        })
      }
      close(){
        super.close();
        this._form.reset()
      }
    
}
