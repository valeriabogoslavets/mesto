const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const cards = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards').content;
// попап
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeAdd = document.querySelector('.popup_type_add');
const popup = document.querySelector('.popup');
const popupInputUserName = document.querySelector('.popup__input_type_username');
const popupAboutMe = document.querySelector('.popup__input_type_aboutme');
const popupForm = document.querySelector('.popup__form');
const popupFormEdit = document.querySelector('.popup__form_edit');
const popupFormAdd = document.querySelector('.popup__form_add');
const popupInputTypePlace = document.querySelector('.popup__input_type_place');
const popupInputTypeLink = document.querySelector('.popup__input_type_link');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImageElement = document.querySelector('.popup__image');
const popupImageLable = document.querySelector('.popup__image-lable');

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

// функция создания и добавления карточек
function createPlace(element) {
    const newPlaceElement = cardsTemplate.querySelector('.place').cloneNode(true);
    const likeButtonElement = newPlaceElement.querySelector('.place__button-like');
    const deleteButtonElement = newPlaceElement.querySelector('.place__button-delete');
    const imagePlace = newPlaceElement.querySelector('.place__image');
    newPlaceElement.querySelector('.place__title').textContent = element.name;
    newPlaceElement.querySelector('.place__image').src = element.link

    likeButtonElement.addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__button-like_active');
    });

    deleteButtonElement.addEventListener('click', function (evt) {
        evt.target.closest('.place')
        newPlaceElement.remove();
    });
    imagePlace.addEventListener('click', function (evt) {
        openedPopup(popupTypeImage);
        popupImageElement.src = element.link
        popupImageLable.textContent = element.name
    });

    cards.prepend(newPlaceElement);
};


initialCards.forEach(createPlace);




//слушатели событий

popupTypeImage.querySelector('.popup__button-close').addEventListener('click', function () {
    closePopup(popupTypeImage)
});

function openedPopup(element) {
    element.classList.add('popup_opened');
};
profileEditButton.addEventListener('click', function () {
    openedPopup(popupTypeEdit);
    popupInputUserName.value = profileName.textContent;
    popupAboutMe.value = profileStatus.textContent;
});
profileAddButton.addEventListener('click', function () {
    openedPopup(popupTypeAdd);
});
function closePopup(element) {
    element.classList.remove('popup_opened')
};
popupTypeEdit.querySelector('.popup__button-close').addEventListener('click', function () {
    closePopup(popupTypeEdit)
});
popupTypeAdd.querySelector('.popup__button-close').addEventListener('click', function () {
    closePopup(popupTypeAdd)
});


// функции формы
function formSubmitProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputUserName.value;
    profileStatus.textContent = popupAboutMe.value;
    closePopup(popupTypeEdit)
}

popupFormEdit.addEventListener('submit', formSubmitProfileEdit);


function formSubmitPlaceAdd(evt) {
    evt.preventDefault();
    const text = popupInputTypePlace.value;
    const link = popupInputTypeLink.value;
    const objectPlace = {
        name: text,
        link: link
    }
    createPlace(objectPlace);
    closePopup(popupTypeAdd);
};


popupFormAdd.addEventListener('submit', formSubmitPlaceAdd);


