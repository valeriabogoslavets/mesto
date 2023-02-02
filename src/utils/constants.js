export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export const popupFormEdit = document.querySelector('.popup__form_edit');
export const popupFormAdd = document.querySelector('.popup__form_add');
export const popupFormAvatar = document.querySelector('.popup__form_avatar')
export const userNameInput = popupFormEdit.querySelector('.popup__input_type_name');
export const aboutMeInput = popupFormEdit.querySelector('.popup__input_type_aboutme');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const profileAddButton = document.querySelector('.profile__add-btn');
export const profilePhoto = document.querySelector('.profile__photo');

