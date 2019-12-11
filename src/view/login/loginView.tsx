import React from 'react'
import { LoginForm } from "./component/loginForm"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './loginViewStyle.scss'


export function LoginView(props) {
    return (<>
        
        <Container className="d-flex justify-content-center login-container">
            <Col>
                <Row className="login-header">
                    <div className="text-logo">
                        FoodUnit
                    </div>
                </Row>
                <Row className="login-body">
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
                </Row>
                
            </Col>
        
            
        </Container>
        </>
    )
}