import { inject, observer } from "mobx-react"
import React from 'react'
import { AuthStore } from "../../../store/authStore"
import * as Routes from "../../../routes"

import Form from 'react-bootstrap/Form'

import './loginFormStyle.scss'
import FlatButton from "../../../commonComponents/flatButton"

interface LoginFormProps {
    authStore?: AuthStore
}

export const LoginForm = inject("authStore")(
    observer(({authStore}: LoginFormProps) => {
        authStore.onTryAutoLogin(Routes.MAIN_ROUTE)

        const handleMailAddressChange = (event) => {
            authStore.setMailAddress(event.target.value)
        }

        const handlePasswordChange = (event) => {
            authStore.setPassword(event.target.value)
        }

        const handleLogin = (event) => {
            event.preventDefault()
            authStore.onLogin()
        }

        return (
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formLoginData">
                    <Form.Control type="email" placeholder="Deine E-Mail-Adresse"
                        value={authStore.mailAddress}
                        onChange={handleMailAddressChange} />
                    
                    <Form.Control type="password" placeholder="Dein Passwort"
                        value={authStore.password}
                        onChange={handlePasswordChange} />

                    <Form.Text className="text-danger">
                        {authStore.loginErrorMessage}
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
    })
)