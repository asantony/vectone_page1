import React, { Component } from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';
import { Card } from 'react-bootstrap';
import './Maincontent.css';

export default class Maincontent extends Component {
    constructor(props) {
        super(props)
    }

    callwebrendering = () => {
        return (
            <div className="main-text">
                <h1>Unlimited business benefits</h1>
                <h1>with UnifiedRing</h1>
                <p>Manage virtual teams with maximum efficiency.</p>
            </div>
        )
    }
    callmobrendering = () => {
        var fontstyle = {
            fontSize: "30px !important",
            fontWeight: "bold"
        }
        return (
            <div className="main-text" >
                <h1 style={fontstyle}>Unlimited <br /> business benefits <br /> with UnifiedRing</h1>
                <p>Manage virtual teams with <br /> maximum efficiency.</p>
                <p></p>
            </div>
        )
    }
    render() {
        return (
            <Container className="thumbimgcontainer">
                {(isMobile & (!isTablet)) ? this.callmobrendering() : this.callwebrendering()}
                <Row className="justify-content-center">
                    <Col xs={12} md={12} lg={4} className="thumbcontainer">
                        <div className="img1container" >
                            <Card className="cardcontainer">
                                <Card.Img variant="top" src="assets/img1.png" />
                                <Card.Body className="cardbody">
                                    <Card.Text>
                                        No installation, no activation fee, and no set-up fee.
                                    </Card.Text>
                                </Card.Body>
                            </Card >
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="thumbcontainer">
                        <div className="img2container" >
                            <Card className="cardcontainer">
                                <Card.Img variant="top" src="assets/img2.png" />
                                <Card.Body className="cardbody">
                                    <Card.Text>
                                        Get auto-receptionist to handle calls with customized and informative IVRs.
                                    </Card.Text>
                                </Card.Body>
                            </Card >

                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4} className="thumbcontainer">
                        <div className="img3container" >
                            <Card className="cardcontainer">
                                <Card.Img variant="top" src="assets/img3.png" />
                                <Card.Body className="cardbody">
                                    <Card.Text>
                                        Chat and collaborate efficiently with your remote teams.
                                    </Card.Text>
                                </Card.Body>
                            </Card >

                        </div>
                    </Col>
                </Row>
            </Container >

        )
    }
}