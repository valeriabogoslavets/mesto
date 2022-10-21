import {heandleOpenPopupImage} from './index.js'

export class  Card {
    constructor(data, templateSelector, heandleOpenPopupImage) {
        this._name = data.name
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._heandleOpenPopupImage = heandleOpenPopupImage;
    }
    _getTemplate() {
        const template = document.querySelector(this._templateSelector).content;
       const cardElem = template.querySelector('.place').cloneNode(true)
        return cardElem
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners()
        this._image = this._element.querySelector('.place__image') 
        this._title = this._element.querySelector('.place__title') 
        this._image.src = this._link;
        this._image.setAttribute('alt', `${this._title}`)
        this._title.textContent = this._name;

        return this._element;
    }
    _hendleDeleteCard() {
        this._element.remove();
    }

    _hendleBigImage() {
        this._heandleOpenPopupImage(this._name, this._link)
    }
    _hendleLikeImage() {
        this._likeButton.classList.toggle('.place__button-like_active')
    }

    _setEventListeners() {
        this._likeButton = this._element.querySelector('.place__button-like')
        this._deleteButton = this._element.querySelector('.place__button-delete') 
        this._image = this._element.querySelector('.place__image')

        this._likeButton.addEventListener('click', () => {
            this._hendleLikeImage()
        });

        this._deleteButton.addEventListener('click', () => {
            this._hendleDeleteCard()
        });
        this._image.addEventListener('click', () => {
            this._hendleBigImage()
        });

    }
}
