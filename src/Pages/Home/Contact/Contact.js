import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{ padding: "110px" }}>
            <h4><u>Contact us</u></h4>
            <Row xs={1} md={2} lg={3} className="g-4 my-2">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title><u>Email us at</u></Card.Title>
                            <Card.Text>
                                <p>Email: travellingagencybd001@gmail.com</p>
                                <p>Email: travellingagencybd002@yahoo.com</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title><u>Call us at</u></Card.Title>
                            <Card.Text>
                                <p>Phone: +8801547678474</p>
                                <p>Phone: +8805476784567</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title><u>Find us at</u></Card.Title>
                            <Card.Text>
                                <p>House no: 09, Road no: 13/2</p>
                                <p>Dhanmondi, Dhaka-1209, Bangladesh</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;