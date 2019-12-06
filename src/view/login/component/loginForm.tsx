import { computed } from "mobx"
import { inject, observer } from "mobx-react"
import React from 'react'
import { Component } from 'react'

import { AuthStore } from "../../../store/authStore"
import * as Routes from "../../../routes"

interface LoginFormProps {
    authStore?: AuthStore
}

@inject('authStore')
@observer
export class LoginForm extends Component<LoginFormProps> {

    @computed 
    get authStore() {
        return this.props.authStore
    }

    constructor(props) {
        super(props)
        this.props.authStore.onTryAutoLogin(Routes.MAIN_ROUTE)
    }

    handleMailAddressChange = (event) => {
        this.authStore.setMailAddress(event.target.value)
    }

    handlePasswordChange = (event) => {
        this.authStore.setPassword(event.target.value)
    }

    handleLogin = (event) => {
        event.preventDefault()
        this.authStore.onLogin()
    }

    render() {
        return (
            <form spellCheck="false" onSubmit={this.handleLogin}>
                <input type="text" name="mail-addr" placeholder="Deine E-Mail-Adresse"
                       value={this.authStore.mailAddress}
                       onChange={this.handleMailAddressChange}/>
                <input type="password" name="password" placeholder="Dein Passwort"
                       value={this.authStore.password}
                       onChange={this.handlePasswordChange}/>
                <button>
                    einloggen
                </button>

                <p>{this.authStore.loginErrorMessage}</p>
            </form>
        )
    }
}