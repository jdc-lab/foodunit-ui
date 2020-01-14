import React from 'react'
import { LoginForm } from "./component/loginForm"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './loginViewStyle.scss'


export function LoginView() {
    return (
        <Container className="p-0 pt-md-5 justify-content-center login-container">
            <Row noGutters>
                <Col className="login-header">
                    <div className="text-logo">
                        FoodUnit
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col className="login-body">
                    <div className="login-text text-strong">
                        Jetzt einloggen & Essen bestellen
                    </div>
                    <div className="login-form-row">
                        <LoginForm />
                    </div>
                    <p className="text-center login-copyright">
                        © 2019 FoodUnit — 
                        <a className="text-dark link-underlined" target="_blank" href="https://github.com/dominikbraun/foodunit">
                            dominikbraun/foodunit
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}