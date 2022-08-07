let profileEditButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popup = document.querySelector('.popup');
let popupInputUserName = document.querySelector('.popup__input_username');
let popupAboutMe = document.querySelector('.popup__input_aboutme');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupForm = document.querySelector('.popup__form');

function popupOpened() {
    popupInputUserName.value = profileName.textContent;
    popupAboutMe.value = profileStatus.textContent;
    popup.classList.add('popup__opened')
}

profileEditButton.addEventListener('click',popupOpened);

function popupClose() {
    popup.classList.remove('popup__opened');
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputUserName.value;
    profileStatus.textContent = popupAboutMe;
    popupClose()
}
popupButtonClose.addEventListener('click', popupClose); 
popupForm.addEventListener('submit', formSubmitHandler);
