
import './index.css';
import Section from "../components/Section";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Сard.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from "../components/Api.js"
import {
    validationConfig,
    popupFormEdit,
    userNameInput,
    aboutMeInput,
    popupFormAdd,
    profileEditButton,
    profileAddButton,
    profilePhoto,
    popupFormAvatar
} from "../utils/constants.js"

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
    headers: {
        authorization: "495258ba-2070-495b-863f-2b46d81df491",
        "Content-Type": "application/json",
    },
});

const userInfo = new UserInfo({
    usernameSelector: '.profile__name',
    aboutmeSelector: '.profile__status',
    avatarSelector: '.profile__avatar'
})

api.getUserInfo()
    .then((data) => {
        userInfo.setUserInfo(data)
        userInfo.setUserId(data)

    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })

api.getInitialCards()
    .then((cards) => {
        sectionCard.renderItems(cards)

    })


function createCard(data) {
    const newCard = new Card(data, '.template', popupImage.open.bind(popupImage), userInfo.getUserId.bind(userInfo), handlePutLike, handleDeleteLike, handleDeleteClick)
    return newCard.generateCard()
}
const sectionCard = new Section({
    renderer: (item) => sectionCard.addItem(createCard(item))
},
    '.elements'
);

function handlePutLike(card, cardId) {
    api.putLike(cardId).then((res) => {
        card.counterLikes(res)
    })
        .catch(err => console.log(`Ошибка: ${err}`))
}
function handleDeleteLike(card, cardId) {
    api.deleteLike(cardId).then((res) => {
        card.counterLikes(res)
    })
        .catch(err => console.log(`Ошибка: ${err}`))
}


const handleProfileFormSubmit = formValues =>
    api.editProfile(formValues.username, formValues.aboutme).then(res => {
        userInfo.setUserInfo(res)
        popupTypeEdit.close()
    })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => popupTypeEdit.isLoading(false))


const handlePlaceFormSubmit = formValues =>
    api.addCard(formValues.name, formValues.link).then(res => {
        sectionCard.addItem(createCard(res))
        popupTypeAdd.close()
    })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => popupTypeAdd.isLoading(false))


const handleAvatarFormSubmit = formValues =>
    api.changeAvatar(formValues.avatar).then(res => {
        userInfo.setUserInfo(res)
        popupTypeAvatar.close()
    })
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => popupTypeAdd.isLoading(false))


function handleDeleteClick(card, cardId) {
    popupTypeConfirm.open(card, cardId)
}
function handleConfirmationClick(cardId, card) {
    api.deleteCard(cardId)
        .then(() => {
            card.handleDeleteCard();
            popupTypeConfirm.close()
        })
        .catch(err => console.log(`Ошибка: ${err}`))
}

const popupTypeEdit = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit)
const popupTypeAdd = new PopupWithForm('.popup_type_add', handlePlaceFormSubmit)
const popupTypeAvatar = new PopupWithForm('.popup_type_avatar', handleAvatarFormSubmit)
const popupImage = new PopupWithImage('.popup_type_image')
const popupTypeConfirm = new PopupWithConfirmation('.popup_type_confirmation', handleConfirmationClick)
const formEditValid = new FormValidator(validationConfig, popupFormEdit)
const formAddValid = new FormValidator(validationConfig, popupFormAdd)
const formAvatarValid = new FormValidator(validationConfig, popupFormAvatar)



function clickProfileEditButton() {
    const userInfoObject = userInfo.getUserInfo()
    userNameInput.value = userInfoObject.username;
    aboutMeInput.value = userInfoObject.aboutme;
    popupTypeEdit.open()
}

function clickProfileAddButton() {
    popupTypeAdd.open()
    formAddValid.resValidation()
}

function clickProfileAvatar() {
    popupTypeAvatar.open()
    formAvatarValid.resValidation()
}


formAddValid.enableValidation();
formEditValid.enableValidation();
formAvatarValid.enableValidation();
popupImage.setEventListeners();
popupTypeEdit.setEventListeners();
popupTypeAdd.setEventListeners();
popupTypeConfirm.setEventListeners();
popupTypeAvatar.setEventListeners()
profileEditButton.addEventListener('click', clickProfileEditButton);
profileAddButton.addEventListener('click', clickProfileAddButton);
profilePhoto.addEventListener('click', clickProfileAvatar);
