import React from 'react'
import {Col, Container, Nav, Row} from "react-bootstrap"

/**
 * Navigation is a wrapper for views which need a navigation.
 */
const Navigation = (props) => (
    <Container fluid className="navigation-container">
        <Row>
            <Col xs={12} md={2}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Col>
            <Col {...props} />
        </Row>
    </Container>
)

export default Navigation