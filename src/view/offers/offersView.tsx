import React from 'react'
import { LoggedIn } from '../../commonComponents/loggedIn'
import Navigation from "../../commonComponents/navigation"

export function OffersView(props) {
    return (
        <LoggedIn>
            <Navigation>
                Offers
            </Navigation>
        </LoggedIn>
    )
}