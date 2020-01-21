import React from 'react'
import {Col, Container, Nav, Row} from "react-bootstrap"
import {CREATE_OFFER_ROUTE, MY_OFFERS_ROUTE, OFFERS_ROUTE} from "../routes"
import {Link} from "@reach/router"

import "./navigation.scss"

interface LinkElementProps {
    children: React.ReactNode,
    route: string,
    activeRoute: string
}

function LinkElement({children, route, activeRoute
}: LinkElementProps) {
    return <Link className={`nav-link ${route === activeRoute && "active"} text-md px-2 px-xl-3 py-3 rounded-0`} to={route}>{children}</Link>

}

interface NavigationProps {
    children: React.ReactNode,
    activeRoute: string
}

/**
 * Navigation is a wrapper for views which need a navigation.
 */
const Navigation = ({children, activeRoute}: NavigationProps) => (
    <Container fluid className="navigation-container">
        <Row>
            <Col className="p-0 navigation-column sidebar-left-lg bg-darker border-right col-12 col-lg-3 col-xl-2">
                <div className="px-2 py-1 px-xl-4 py-xl-4">
                    {/* Todo: logo in extra component?*/}
                    <div
                        className="bg-primary-gradient text-white text-hand mx-auto text-center text-logo div-logo my-3 px-2 py-2 py-xl-3 rounded-0">
                        Food<wbr/>Unit
                    </div>
                </div>
                <p className="text-light text-center text-strong text-sm mb-0 p-3">Angebot auswählen &amp; bestellen</p>
                <Nav defaultActiveKey="/home" className="flex-column side-nav">
                    <LinkElement activeRoute={activeRoute} route={OFFERS_ROUTE}>
                        <i className="fas fa-pizza-slice ml-1 mr-3"></i>
                        Aktuelle Angebote
                    </LinkElement>
                    <LinkElement activeRoute={activeRoute} route={CREATE_OFFER_ROUTE}>
                        <i className="fas fa-share ml-1 mr-3"></i>
                        Angebot Erstellen
                    </LinkElement>
                    <LinkElement activeRoute={activeRoute} route={MY_OFFERS_ROUTE}>
                        <i className="fas fa-layer-group ml-1 mr-3"></i>
                        Meine Angebote
                    </LinkElement>
                </Nav>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-8 px-1 px-md-4 mx-auto">
                {children}
            </Col>
            <Col className="col-12 col-lg-3 col-xl-2 p-0 sidebar-right-lg bg-white border-left">
                left
            </Col>
        </Row>
    </Container>
)

export default Navigation