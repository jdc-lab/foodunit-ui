import {Link} from "@reach/router"
import {LOGIN_ROUTE} from "../routes"
import {inject, observer} from "mobx-react"
import React  from 'react'
import { AuthStore } from "../store/authStore"

interface LoggedInProps {
    authStore?: AuthStore
    children: JSX.Element
}

/**
 * LoggedIn is a wrapper for views which should only be displayed if logged in.
 */
export const LoggedIn = inject("authStore")(
    observer(({ authStore, children }: LoggedInProps) => {
        if (authStore.loggedIn) {
            return <>{children}</>
        } else if (!authStore.autoLoginAlreadyRun) {
            authStore.onTryAutoLogin()
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
    })
)