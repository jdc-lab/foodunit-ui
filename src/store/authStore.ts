import { observable, action, reaction, computed } from 'mobx'
import Axios from 'axios'
import { navigate } from "@reach/router"

import { Config } from '../app'
import * as Routes from '../routes'

export class AuthStore {
    @observable 
    mailAddress: string
    
    @observable 
    password: string

    @observable 
    loggedIn: boolean

    @observable 
    loginErrorMessage: string

    @observable
    autoLoginAlreadyRun: boolean

    private config: Config

    @action
    private init() {
        this.mailAddress = ""
        this.password = ""
        this.loggedIn = false
        this.loginErrorMessage = ""
        this.autoLoginAlreadyRun = false
    }

    constructor(config: Config) {
        this.config = config
        this.init()
    }

    onTryAutoLogin(routeOnSucces?: string) {
        if (this.autoLoginAlreadyRun)
            return

        // do auto login if session still valid
        Axios.get(this.config.apiUrl +  "/users/is-authenticated",
            {withCredentials: true}
        ).then((response) => {
            if (response.data === true) {
                this.setLoggedIn()
                if (routeOnSucces) {
                    navigate(routeOnSucces)
                }
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => this.setAutoLoginFinished())
    }

    onLogin() {
        Axios.post(this.config.apiUrl +  "/users/login",
            {
                mail_addr: this.mailAddress,
                password: this.password
            },{
                withCredentials: true
            }).then((response) => {

            if (response.data === true) {

                this.setLoggedIn()
                navigate(Routes.MAIN_ROUTE)
            } else {
                this.setErrorMessage("Login fehlgeschlagen. E-Mail oder Passwort ist falsch.")
            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    onLogout() {
        let that = this
        Axios.get(this.config.apiUrl +  "/users/logout",
            {
                withCredentials: true
            }).then(function (response) {

                if (response.data === true) {
                    that.setLoggedOut()
                    navigate(Routes.LOGOUT_ROUTE)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    @action
    private setAutoLoginFinished() {
        this.autoLoginAlreadyRun = true
    }

    @action
    setMailAddress(mailAddress) {
        this.mailAddress = mailAddress
    }

    @action
    setPassword(password) {
        this.password = password
    }

    @action
    private setLoggedIn() {
        console.log("set logged in")
        this.password = ""
        this.loginErrorMessage = ""
        this.loggedIn = true
    }

    @action
    private setLoggedOut() {
        this.loggedIn = false
    }

    @action
    private setErrorMessage(message: string) {
        this.loginErrorMessage = message
    }
}