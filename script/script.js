let profileEditButton = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popup = document.querySelector('.popup');
let popupInputUserName = document.querySelector('.popup__input_type_username');
let popupAboutMe = document.querySelector('.popup__input_type_aboutme');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupForm = document.querySelector('.popup__form');



function popupOpened() {
    popupInputUserName.value = profileName.textContent;
    popupAboutMe.value = profileStatus.textContent;
    popup.classList.add('popup_opened')
}
profileEditButton.addEventListener('click', popupOpened);


function popupClose() {
    popup.classList.remove('popup_opened');
}
popupButtonClose.addEventListener('click', popupClose);


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputUserName.value;
    profileStatus.textContent = popupAboutMe.value;
    popupClose()
}

profileEditButton.addEventListener('click', popupOpened);
popupForm.addEventListener('submit', formSubmitHandler);
popupButtonClose.addEventListener('click', popupClose);
