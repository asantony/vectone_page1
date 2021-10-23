import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import './Footer.css';

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (isMobile) {
            return (
                <Container className="mob-vectone-footer" fluid>
                    <Row className="vectone-footer-row">
                        <Col xs={12} md={12} lg={4} className="vectone-footer-logo">
                            <img className="logo_icon" src="assets/logo.svg"></img>
                        </Col>
                        <Col xs={12} md={12} lg={4} className="vectone-socialicons">
                            <div>
                                <img className="logo_icon_right" src="assets/Group 22857.svg"></img>
                                <img className="logo_icon_both" src="assets/Group 22856.svg"></img>
                                <img className="logo_icon_both" src="assets/Group 22847.svg"></img>
                                <img className="logo_icon_both" src="assets/Group 23379.svg"></img>
                                <img className="logo_icon_left" src="assets/Group 23378.svg"></img>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={4} className="vectone-alrights">
                            <p>2020 UnifiedRing. All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <Container className="vectone-footer" fluid>
                    <Row className="vectone-footer-row">
                        <Col xs={12} md={12} lg={4} className="vectone-footer-logo">
                            <img className="logo_icon" src="assets/logo.svg"></img>
                        </Col>
                        <Col xs={12} md={12} lg={4} className="vectone-alrights">
                            <p>2020 UnifiedRing. All rights reserved</p>
                        </Col>
                        <Col xs={12} md={12} lg={4} className="vectone-socialicons">
                            <div>
                                <img className="logo_icon_right" src="assets/Group 22857.svg"></img>
                                <img className="logo_icon_both" src="assets/Group 22856.svg"></img>
                                <img className="logo_icon_both" src="assets/Group 22847.svg"></img>
                                <img className="logo_icon_both" src="assets/Group 23379.svg"></img>
                                <img className="logo_icon_left" src="assets/Group 23378.svg"></img>
                            </div>
                        </Col>
                    </Row>
                    <div className="hangouticon">
                        <img src="assets/chat.svg"></img>
                    </div>
                </Container>
            )
        }
    }
}