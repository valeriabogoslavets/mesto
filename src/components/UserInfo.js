export default class UserInfo {
    constructor({usernameSelector,aboutmeSelector,avatarSelector}) {
        this._userName = document.querySelector(usernameSelector);
        this._aboutMe = document.querySelector(aboutmeSelector);
        this._avatar = document.querySelector(avatarSelector)

    }
   
    getUserInfo() {
       this._information = {
           username: this._userName.textContent,
           aboutme: this._aboutMe.textContent,
           
        }
        return this._information;
    }
   
    setUserInfo(data) {
        this._userName.textContent = data.name,
        this._aboutMe.textContent = data.about;
       this._avatar.src = data.avatar;
    }
    
   
    setUserId(data) {
        this._id = data._id
    }
    getUserId() {
        return this._id;
      }
}

