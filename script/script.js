let profileEditButton = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popup = document.querySelector('.popup');
let popupInputUserName = document.querySelector('.popup__input_username');
let popupAboutMe = document.querySelector('.popup__input_aboutme');

function popupOpened() {
    popupInputUserName.value = profileName.textContent;
    popupAboutMe.value = profileStatus.textContent;
    popup.classList.add('popup__opened')
}
profileEditButton.addEventListener('click', popupOpened);


let popupButtonClose = document.querySelector('.popup__button-close');
function popupClose() {
    popup.classList.remove('popup__opened');
}
popupButtonClose.addEventListener('click', popupClose);

let popupForm = document.querySelector('.popup__form');
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputUserName.value;
    profileStatus.textContent = popupAboutMe;
    popupClose()
}

popupForm.addEventListener('submit', formSubmitHandler);
