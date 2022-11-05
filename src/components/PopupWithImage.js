import Popup  from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupLable = this._popup.querySelector('.popup__image-lable')
    }
    open(name,link) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupLable.textContent = name;
        super.open();
    }
}