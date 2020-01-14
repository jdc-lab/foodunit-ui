import React from 'react'
import { LoggedIn } from '../../commonComponents/loggedIn'
import Navigation from "../../commonComponents/navigation"
import {OFFERS_ROUTE} from "../../routes"

export function OffersView(props) {
    return (
        <LoggedIn>
            <Navigation activeRoute={OFFERS_ROUTE}>
                Offers
            </Navigation>
        </LoggedIn>
    )
}