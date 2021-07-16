import {makeAutoObservable} from "mobx";

export  default class UserStore {
    constructor() {
        this._isAuth = true
        this._agent = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsAgent(agent) {
        this._agent = agent
    }

    get isAuth() {
        return this._isAuth
    }
    get agent() {
        return this._agent
    }
}
