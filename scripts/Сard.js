
export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        const template = document.querySelector(this._templateSelector).content;
        const cardElem = template.querySelector('.place').cloneNode(true)
        return cardElem
    }

    _hendleDeleteCard() {
        this._element.remove();
        this._element = null

    }

    _hendleBigImage() {
        this._handleCardClick(this._name, this._link)
        
    }
    _hendleLikeImage() {
        this._likeButton.classList.toggle('place__button-like_active')
    }

    _setEventListeners() {

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

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.place__image')
        this._title = this._element.querySelector('.place__title')
        this._deleteButton = this._element.querySelector('.place__button-delete')
        this._likeButton = this._element.querySelector('.place__button-like');

        this._title.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;


        this._setEventListeners()

        return this._element;
    }
}



