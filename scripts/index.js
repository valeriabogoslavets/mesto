import { Card } from "./cards.js";
import { FormValidator } from "./validate.js";
import { initialCards } from "./initial-cards.js";



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
const popupInputTypePlace = popupFormAdd.querySelector('.popup__input_type_place');
const popupInputTypeLink = popupFormAdd.querySelector('.popup__input_type_link');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImageElement = document.querySelector('.popup__image');
const popupImageLable = document.querySelector('.popup__image-lable');


function renderElement(name,link, templateSelector, heandleOpenPopupImage) {
    const card = new Card(name,link, templateSelector, heandleOpenPopupImage) 
    const cardElement = card.generateCard()
    return (cardElement);
}
initialCards.forEach((item) => {
    const cardElement = renderElement(item.name, item.link, '.template', heandleOpenPopupImage)
    cards.append(cardElement);
})
function createCard (evt) {
    evt.preventDefault()
    const cardElement = renderElement( popupInputTypePlace.value,popupInputTypeLink.value,'.template',heandleOpenPopupImage)
cards.prepend(cardElement)
closePopup(popupTypeAdd)
popupFormAdd.reset()
}
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
formAddValid.enValidation()
formEditValid.enValidation()

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

function heandleOpenPopupImage(name, link) {
    popupImageElement.src = link;
    popupImageElement.alt = name;
    popupImageLable.textContent = name;
    openPopup(popupTypeImage);
}



function handleProfileFormSubmit(evt) {
    evt.preventDefault()
    profileName.textContent = userNameInput.value;
    profileStatus.textContent = aboutMeInput.value;
    closePopup(popupTypeEdit)

}
function popupOpenButton() { 
const buttonSave = popupTypeEdit.querySelector('.popup__button_edit')
openPopup(popupTypeEdit); 
userNameInput.value = profileName.textContent;
aboutMeInput.value = profileStatus.textContent;
formEditValid.removeButton(buttonSave)
}


//слушатели событий
profileEditButton.addEventListener('click', popupOpenButton);

profileAddButton.addEventListener('click', () => {
    openPopup(popupTypeAdd);
});
// функции формы
popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit',createCard);


export { heandleOpenPopupImage }