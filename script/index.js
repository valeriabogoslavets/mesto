const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const cards = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards').content;
// попап
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');
<<<<<<< HEAD
const popupInputUserName = document.querySelector('.popup__input_type_username');
const popupAboutMe = document.querySelector('.popup__input_type_aboutme');
=======
>>>>>>> develop
const popupFormEdit = document.querySelector('.popup__form_edit');
const userNameInput = popupFormEdit.querySelector('#username');
const aboutMeInput = popupFormEdit.querySelector('#aboutme');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupInputTypePlace = popupFormAdd.querySelector('#place');
const popupInputTypeLink = popupFormAdd.querySelector('#link');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImageElement = document.querySelector('.popup__image');
const popupImageLable = document.querySelector('.popup__image-lable');
const closeButtons = document.querySelectorAll('.popup__button-close');

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
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// функция создания и добавления карточек

function createCard(element) {
    const newPlaceElement = cardsTemplate.querySelector('.place').cloneNode(true);
    const imagePlace = newPlaceElement.querySelector('.place__image');
    const titlePlace = newPlaceElement.querySelector('.place__title');
    const likeButtonElement = newPlaceElement.querySelector('.place__button-like');
    const deleteButtonElement = newPlaceElement.querySelector('.place__button-delete');

    imagePlace.src = element.link;
    imagePlace.alt = element.name;
    titlePlace.textContent = element.name;

    likeButtonElement.addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__button-like_active');
    });

    deleteButtonElement.addEventListener('click', function () {
        newPlaceElement.remove();
    });

    imagePlace.addEventListener('click', function (evt) {
        openPopup(popupTypeImage);
        popupImageElement.src = element.link;
        popupImageElement.alt = element.name;
        popupImageLable.textContent = element.name;
    });


    return newPlaceElement;
};


function createPlace(element) {
    const newPlaceElement = createCard(element)
    cards.prepend(newPlaceElement);
};


initialCards.forEach(createPlace);

//слушатели событий

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});


function openPopup(element) {
    element.classList.add('popup_opened');
    element.addEventListener('click', handlePopupCloseAnyPlace)
    document.addEventListener('keydown', handlePopupCloseKey);
};
profileEditButton.addEventListener('click', function () {
    openPopup(popupTypeEdit);
<<<<<<< HEAD
    popupInputUserName.value = profileName.textContent;
    popupAboutMe.value = profileStatus.textContent;
=======
    userNameInput.value = profileName.textContent;
    aboutMeInput.value = profileStatus.textContent;
>>>>>>> develop
});
profileAddButton.addEventListener('click', function () {
    openPopup(popupTypeAdd);
});
function closePopup(element) {
    element.classList.remove('popup_opened')
    element.removeEventListener('click', handlePopupCloseAnyPlace)
    document.removeEventListener('keydown', handlePopupCloseKey)
};

<<<<<<< HEAD
=======

//функция закрытия попап через Escape
const handlePopupCloseKey = (evt) => {
    if (evt.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
};
// Функция закрытия попапа кликом на олверлей
const handlePopupCloseAnyPlace = (evt, popup) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}
>>>>>>> develop


// функции формы
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = userNameInput.value;
    profileStatus.textContent = aboutMeInput.value;
    closePopup(popupTypeEdit)
}

popupFormEdit.addEventListener('submit', handleProfileFormSubmit);


function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const text = popupInputTypePlace.value;
    const link = popupInputTypeLink.value;
    const objectPlace = {
        name: text,
        link: link
    }
    evt.target.reset()
    createPlace(objectPlace);
    closePopup(popupTypeAdd);
};


popupFormAdd.addEventListener('submit', handlePlaceFormSubmit);
<<<<<<< HEAD


=======
>>>>>>> develop
