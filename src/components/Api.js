export default class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

_reciveResponse(res) {
    if(res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}
//Получаем информацию о пользователе с сервера

getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
    }).then((res) => {
        return this._reciveResponse(res);
    });
}
// получаем карточки с сервера
getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,{
        headers: this._headers,
    }).then((res) => {
        return this._reciveResponse(res);
    })
}

editProfile(name, about) {
    return fetch (`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ name, about }),
      }).then((res) => {
    
        return this._reciveResponse(res);
    })
}

addCard(name,link) {
    return fetch (`${this._baseUrl}/cards`, {
        method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => {
        return this._reciveResponse(res);
    })
}
 putLike(cardId) {
    return fetch (`${this._baseUrl}/cards/${cardId}/likes`,{
        method: 'PUT',
        headers: this._headers,
      }).then((res) => {
        return this._reciveResponse(res);
    })
 }
deleteLike(cardId) {
    return fetch (`${this._baseUrl}/cards/${cardId}/likes`,{
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => {
        return this._reciveResponse(res);
    })
}
changeAvatar(avatar) {
   return fetch (`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ avatar }),
      }).then((res) => {
       
        return this._reciveResponse(res);
    })

}
    deleteCard(cardId) {
     return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => {
        return this._reciveResponse(res);
     })
    }
}
