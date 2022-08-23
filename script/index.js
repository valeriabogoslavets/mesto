const profileEditButton = document.querySelector('.profile__edit-btn');
const popupTypeEditButton = document.querySelector('.popup_type_edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const popupTypeAddButton = document.querySelector('.popup_type_add-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popup = document.querySelector('.popup');
const popupInputUserName = document.querySelector('.popup__input_type_username');
const popupAboutMe = document.querySelector('.popup__input_type_aboutme');
const popupForm = document.querySelector('.popup__form');
const cards = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards').content;

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  function addCards(image,title) {
    const cardsElement = cardsTemplate.querySelector('.place').cloneNode(true);
cardsElement.querySelector('.place__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like_active');
});
cardsElement.querySelector('.place__image').src = image;
cardsElement.querySelector('.place__title').textContent = title;
    cards.append(cardsElement);
};
    

  

  initialCards.forEach(function (element) {
    const newCards = cardsTemplate.cloneNode(true);
    newCards.querySelector('.place__image').src = element.link
    newCards.querySelector('.place__title').textContent = element.name
    cards.append(newCards);
});



/*
const likeBtn = cardsElement.querySelector('.place__button-like');
likeBtn.addEventListener('click',function() {
likeBtn.classList.add('.place__button-like_active');
});
const deleteBtn = cardsElement.querySelector('.place__button-delete');
deleteBtn.addEventListener('click', function() {
    deleteBtn.classList.remove();
});
*/














function openedPopup(element) { 
    element.classList.add('popup_opened');
};
profileEditButton.addEventListener('click', function() {
    openedPopup(popupTypeEditButton);
    popupInputUserName.value = profileName.textContent;
    popupAboutMe.value = profileStatus.textContent;
});
profileAddButton.addEventListener('click', function() {
    openedPopup(popupTypeAddButton);
});
function closePopup(element) {
    element.classList.remove('popup_opened')
};
popupTypeEditButton.querySelector('.popup__button-close').addEventListener('click',function() {
    closePopup(popupTypeEditButton)
});
popupTypeAddButton.querySelector('.popup__button-close').addEventListener('click',function() {
    closePopup(popupTypeAddButton)
});





function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputUserName.value;
    profileStatus.textContent = popupAboutMe.value;
    popupClose()
}


popupForm.addEventListener('submit', formSubmitHandler);
