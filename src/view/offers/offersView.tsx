import React from 'react'
import { LoggedIn } from '../../commonComponents/loggedIn'
import Navigation from "../../commonComponents/navigation"
import {OFFERS_ROUTE} from "../../routes"
import OfferList from "../../commonComponents/offerList"

export function OffersView(props) {
    return (
        <LoggedIn>
            <Navigation activeRoute={OFFERS_ROUTE}>
                <div className="mx-0 mx-xl-5 my-4 px-5 py-3 bg-white border rounded-0">
                    Aktuelle Angebote
                    <OfferList listKey="currentOffers" offers={[{id: 1,
                        restaurant: {id: 1, name: "Test"},
                        valid_from: new Date(),
                        valid_to: new Date(),
                        responsible: {id: 1, name: "LOL"}}]} />

                    Abgelaufene Angebote
                    <OfferList listKey="oldOffers" offers={[{id: 1,
                        restaurant: {id: 1, name: "Test"},
                        valid_from: new Date(),
                        valid_to: new Date(),
                        responsible: {id: 1, name: "LOL"}}]} />
                </div>
            </Navigation>
        </LoggedIn>
    )
}