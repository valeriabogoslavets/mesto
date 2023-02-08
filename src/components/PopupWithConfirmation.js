import Popup from './Popup.js'
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector,handleConfirmationClick) {
        super(popupSelector);
        this._button = this._popup.querySelector('.popup__button_save')   
    this._handleConfirmationClick = handleConfirmationClick
 }
 open(card, cardId) {
    super.open()
    this._card = card
    this._cardId = cardId
    
 }
 setEventListeners() {
    super.setEventListeners()
    this._button.addEventListener('click', () => {
        this._handleConfirmationClick(this._card, this._cardId)
    })
 }
}