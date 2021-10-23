import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';
import './BannerHeader.css';

export default class BannerHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (isMobile == true && isTablet == false) {
            return (
                <Container className="mob-bannercontainer" fluid>
                    <Row className="align-items-center bannerItems">
                        <Col>
                            <Row className="main-text">
                                <h1>Best VoIP Phone Systems <br />for Small Businesses</h1>
                            </Row>
                            <div className="btncontainer">
                                <div className="trailbtn">
                                    <span className="trailtxt">14-Day Free Trail</span>
                                </div>
                                <div className="purchasebtn">
                                    <span className="plantxt">Plan Purchase</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
            )
        } else if (isMobile == true && isTablet == true) {
            return (
                <Container className="tab-bannercontainer" fluid>
                    <Row className="align-items-center bannerItems">
                        <Col className="align-items-center" md={{ span: 6, offset: 6 }} sm={{ span: 12, offset: 0 }}>
                            <Row className="main-text">
                                <h1>Best VoIP Phone</h1>
                                <h1>Systems for Small</h1>
                                <h1>Businesses</h1>
                            </Row>
                            <Row className="btncontainer">
                                <Col className="trailbtn">
                                    <span className="trailtxt">14-Day Free Trail</span>
                                </Col>
                                <Col className="purchasebtn">
                                    <span className="plantxt">Plan Purchase</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            )
        } else {
            return (
                <Container className="web-bannercontainer" fluid>
                    <Row className="align-items-center bannerItems">
                        <Col className="align-items-center" md={{ span: 6, offset: 6 }} sm={{ span: 12, offset: 0 }}>
                            <Row className="main-text">
                                <h1>Best VoIP Phone</h1>
                                <h1>Systems for Small</h1>
                                <h1>Businesses</h1>
                            </Row>
                            <Row className="btncontainer">
                                <Col className="trailbtn">
                                    <span className="trailtxt">14-Day Free Trail</span>
                                </Col>
                                <Col className="purchasebtn">
                                    <span className="plantxt">Plan Purchase</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            )
        }
    }
}