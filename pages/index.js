import Section from "../scripts/Section.js";
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Сard.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import {
    validationConfig,
    popupFormEdit,
    userNameInput,
    aboutMeInput,
    popupFormAdd,
    profileEditButton,
    profileAddButton,
    initialCards,

} from "../utils/constants.js"


function createCard(data) {
    const newCard = new Card(data, '.template', popupImage.open.bind(popupImage))
    return newCard.generateCard()
}
const sectionCard = new Section({
    items: initialCards,
    renderer: (item) => sectionCard.addItem(createCard(item))
},
    '.elements'
);


const handleProfileFormSubmit = (formValues) => {
    userInfo.setUserInfo(formValues.username, formValues.aboutme)
    popupTypeEdit.close()
}

const handlePlaceFormSubmit = (formValues) => {
    sectionCard.addItem(createCard(formValues))
    popupTypeAdd.close()
}


const popupTypeEdit = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit)
const popupTypeAdd = new PopupWithForm('.popup_type_add', handlePlaceFormSubmit)
const userInfo = new UserInfo('.profile__name', '.profile__status')
const popupImage = new PopupWithImage('.popup_type_image')
const formEditValid = new FormValidator(validationConfig, popupFormEdit)
const formAddValid = new FormValidator(validationConfig, popupFormAdd)



function clickProfileEditButton() {
    popupTypeEdit.open()
    const userInfoObject = userInfo.getUserInfo()
    userNameInput.value = userInfoObject.username;
    aboutMeInput.value = userInfoObject.aboutme;
}

function clickProfileAddButton() {
    popupTypeAdd.open()
    formAddValid.resValidation()
}

formAddValid.enableValidation();
formEditValid.enableValidation();
profileEditButton.addEventListener('click', clickProfileEditButton);
profileAddButton.addEventListener('click', clickProfileAddButton);
popupImage.setEventListeners();
popupTypeEdit.setEventListeners();
popupTypeAdd.setEventListeners();
sectionCard.renderItems()