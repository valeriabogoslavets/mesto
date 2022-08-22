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
