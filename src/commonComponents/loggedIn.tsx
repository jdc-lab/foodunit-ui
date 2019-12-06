import {Link, RouteComponentProps} from "@reach/router"
import {LOGIN_ROUTE} from "../routes"
import {inject, observer} from "mobx-react"
import React, { Component } from 'react'
import { AuthStore } from "../store/authStore"
import { computed } from "mobx"

interface LoggedInProps {
    authStore?: AuthStore
    children: JSX.Element
}

/**
 * LoggedIn is a wrapper for views which should only be displayed if logged in.
 */
@inject('authStore')
@observer
export class LoggedIn extends Component<LoggedInProps> {

    @computed
    get authStore() {
        return this.props.authStore
    }

    render() {
        if (this.authStore.loggedIn) {
            return <>{this.props.children}</>
        } else if (!this.authStore.autoLoginAlreadyRun) {
            this.authStore.onTryAutoLogin()
            return (
                <div>
                    LOADING...
                </div>
            )
        } else {
            // Todo: Better HTML / CSS for this
            return (
                <div>
                    Du bist nicht angemeldet. Bitte <Link to={LOGIN_ROUTE}>einloggen</Link>.
                </div>
            )
        }
    }

}