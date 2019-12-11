import React from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'

import { LoginView } from './view/login/loginView'
import { OffersView } from './view/offers/offersView'
import { Router, RouteComponentProps } from "@reach/router"

import * as Routes from './routes'
import { AuthStore } from './store/authStore'
import { MyOffersView } from './view/myOffers/myOffersView'

import './style.scss'

export interface Config {
    apiUrl: string
}

interface AppProps extends RouteComponentProps {
    config: Config
}

export class App extends Component<AppProps> {
    private authStore: AuthStore

    constructor(props: AppProps) {
        super(props)
        this.authStore = new AuthStore(props.config)
    }

    render() {
        return (
            <>
                <Provider authStore={this.authStore}>
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
                </Provider>
            </>
        )
    }
}