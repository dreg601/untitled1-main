import {makeAutoObservable} from "mobx";

export  default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get agent() {
        return this._user
    }
}
