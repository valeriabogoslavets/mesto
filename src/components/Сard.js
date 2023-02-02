
export default class Card {
    constructor(data, templateSelector, handleCardOpen, getUserId, handlePutLike, handleDeleteLike, handleDeleteClick) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes
        this._cardId = data._id
        this._getUserId = getUserId
        this._owner = data.owner
        this._templateSelector = templateSelector;
        this._handleCardOpen = handleCardOpen;
        this._handlePutLike = handlePutLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleDeleteClick = handleDeleteClick;
        
    }
    _getTemplate() {
        const template = document.querySelector(this._templateSelector).content;
        const cardElem = template.querySelector('.place').cloneNode(true)
        return cardElem
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.place__image')
        this._title = this._element.querySelector('.place__title')
        this._deleteButton = this._element.querySelector('.place__button-delete')
        this._likeButton = this._element.querySelector('.place__button-like');
        this._likeNumber = this._element.querySelector('.place__like-number')

        
        this._title.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likeNumber.textContent = this._likes.length

        if ((this._owner._id !== this._getUserId())) {
            this._deleteButton.remove()
        }
        if (this._likes.some((like) => {
            return like._id === this._getUserId()
          })) {
            this._likeButton.classList.add('place__button-like_active');
          };
        
        this._setEventListeners()

        return this._element;
    
}

    _handleBigImage() {
        this._handleCardOpen(this._name, this._link)

    }
    _handleLikeImage() {
        if (!this._likeButton.classList.contains('place__button-like_active')) {
            this._handlePutLike(this, this._cardId)
        } else {
            this._handleDeleteLike(this, this._cardId)
        }
    }
    counterLikes(res) {
this._likeNumber.textContent = res.likes.length
this._likeButton.classList.toggle('place__button-like_active')
    }

    _setEventListeners() {

        this._likeButton.addEventListener('click', () => {
            this._handleLikeImage()
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick(this._cardId, this)
        });
        this._image.addEventListener('click', () => {
            this._handleBigImage()
        });
    
    }
    handleDeleteCard() {
        this._element.remove();
        this._element = null
    }

}



