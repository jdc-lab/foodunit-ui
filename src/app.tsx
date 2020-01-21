import React from 'react'
import { Provider} from 'mobx-react'

import { LoginView } from './view/login/loginView'
import { OffersView } from './view/offers/offersView'
import { Router, RouteComponentProps } from "@reach/router"

import * as Routes from './routes'
import { AuthStore } from './store/authStore'
import { MyOffersView } from './view/myOffers/myOffersView'

import './style.scss'

export const App = () => {
     return (
        <>
            <Router>
                <LoginView default path={Routes.LOGIN_ROUTE} />
                <OffersView path={Routes.OFFERS_ROUTE} />
                <MyOffersView path={Routes.MY_OFFERS_ROUTE}/>
                {/*
                <LogoutView path={LOGOUT_ROUTE}/>
                <LoginView default path={LOGIN_ROUTE}/>
                <OffersView path={OFFERS_ROUTE}/>
                <CreateOfferView path={CREATE_OFFER_ROUTE}/>
                <MyOffersView path={MY_OFFERS_ROUTE}/>
                <OfferView path={`${OFFER_ROUTE}/:offerId`}/>
                <OrdersView path={ORDERS_VIEW}/>
                */}
            </Router>
        </>
    )
}