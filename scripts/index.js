
import { FormValidator } from "./Validate.js";
import { initialCards } from "./initial-cards.js";
import {Card} from './Сards.js'

const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const cards = document.querySelector('.elements');
// попап
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');
const popupFormEdit = document.querySelector('.popup__form_edit');
const userNameInput = popupFormEdit.querySelector('#username');
const aboutMeInput = popupFormEdit.querySelector('#aboutme');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupTypePlace = popupFormAdd.querySelector('.popup__input_type_place');
const popupTypeLink = popupFormAdd.querySelector('.popup__input_type_link');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImageElement = document.querySelector('.popup__image');
const popupImageLable = document.querySelector('.popup__image-lable');
// создание карточки
function createCard(element) {
    const newCard = new Card(element, '.template', heandleOpenPopupImage)
    return newCard.generateCard()
}


initialCards.forEach((item) => {
    const card = createCard(item)
    cards.prepend(card);
})

//валидация
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const formEditValid = new FormValidator(validationConfig, popupFormEdit)
const formAddValid = new FormValidator(validationConfig, popupFormAdd)
formAddValid.enableValidation()
formEditValid.enableValidation()




//открытие попапа
function openPopup(element) {
    element.classList.add('popup_opened');
    element.addEventListener('click', handlePopupCloseAnyPlace)
    document.addEventListener('keydown', handlePopupCloseKey);
};
//закрытие попапа
function closePopup(element) {
    element.classList.remove('popup_opened')
    element.removeEventListener('click', handlePopupCloseAnyPlace)
    document.removeEventListener('keydown', handlePopupCloseKey)
};
//функция закрытия попап через Escape
const handlePopupCloseKey = (evt) => {
    if (evt.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
};
// Функция закрытия попапа кликом на олверлей и крестик
const handlePopupCloseAnyPlace = (evt) => {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
                closePopup(popup);
            };
        });
    });
}

//функция редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault()
    profileName.textContent = userNameInput.value;
    profileStatus.textContent = aboutMeInput.value;
    closePopup(popupTypeEdit)
}
//функция добавления карточки 
function handlePlaceFormSubmit(evt) {
    evt.preventDefault()
    const text = popupTypePlace.value;
    const link = popupTypeLink.value;
    const objectPlace = {
        name: text,
        link: link
    }
    cards.prepend(createCard(objectPlace))
    closePopup(popupTypeAdd);
    popupFormAdd.reset()
}
function heandleOpenPopupImage(name, link) {
    popupImageElement.alt = name;
    popupImageElement.src = link;
    popupImageLable.textContent = name;
    openPopup(popupTypeImage);
}
//слушатели событий
profileEditButton.addEventListener('click', () => {
    openPopup(popupTypeEdit);
    userNameInput.value = profileName.textContent;
    aboutMeInput.value = profileStatus.textContent
    formEditValid.resValidation();
});

profileAddButton.addEventListener('click', () => {
    openPopup(popupTypeAdd)
    formAddValid.resValidation()
})
// функции формы
popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', handlePlaceFormSubmit);


export { heandleOpenPopupImage }