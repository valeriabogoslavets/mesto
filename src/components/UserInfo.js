export default class UserInfo {
    constructor(username, aboutme) {
        this._userName = document.querySelector(username);
        this._aboutMe = document.querySelector(aboutme);
    }
    getUserInfo() {
       this._information = {
           username: this._userName.textContent,
           aboutme: this._aboutMe.textContent
        }
        return this._information;
    }
   
    setUserInfo(username,aboutme) {
        this._userName.textContent = username,
        this._aboutMe.textContent = aboutme;
    }
}
