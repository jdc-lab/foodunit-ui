import { computed } from "mobx"
import { inject, observer } from "mobx-react"
import React from 'react'
import { Component } from 'react'

import { AuthStore } from "../../../store/authStore"
import * as Routes from "../../../routes"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './loginFormStyle.scss'
import FlatButton from "../../../commonComponents/flatButton"

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
            <Form onSubmit={this.handleLogin}>
                <Form.Group controlId="formLoginData">
                    <Form.Control type="email" placeholder="Deine E-Mail-Adresse"
                        value={this.authStore.mailAddress}
                        onChange={this.handleMailAddressChange} />
                    
                    <Form.Control type="password" placeholder="Dein Passwort"
                        value={this.authStore.password}
                        onChange={this.handlePasswordChange} />

                    <Form.Text className="text-danger">
                        {this.authStore.loginErrorMessage}
                    </Form.Text>

                    <FlatButton className="text-strong" type="submit">
                        einloggen
                    </FlatButton>

                </Form.Group>
            </Form>

            /*<form spellCheck="false" onSubmit={this.handleLogin}>
                <FormText type="text" name="mail-addr" placeholder="Deine E-Mail-Adresse"
                       value={this.authStore.mailAddress}
                       onChange={this.handleMailAddressChange}/>
                <input type="password" name="password" placeholder="Dein Passwort"
                       value={this.authStore.password}
                       onChange={this.handlePasswordChange}/>
                <Button color="primary">
                    einloggen
                </Button>

                <p>{this.authStore.loginErrorMessage}</p>
            </form>*/
        )
    }
}