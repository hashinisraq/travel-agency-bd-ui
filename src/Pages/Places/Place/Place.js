import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css';

const Place = ({ place }) => {
    const { _id, name, img, pakage, details } = place;
    return (
        <div className="place-container">
            <Col>
                <Card className="card-container">
                    <Card.Body>
                        <img src={img} alt="" />
                        <Card.Text>
                            <h5>Place: {name}</h5>
                            <h5>Pakage: {pakage}</h5>
                            <h5>Description: {details}</h5>
                            <Link
                                to={`/booking/${_id}`}
                            ><Button variant="dark">Add Booking</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Place;