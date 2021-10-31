import React from 'react';
import './Places.css';
import usePlaces from '../../../hooks/usePlaces';
import Place from '../Place/Place';
import { Row } from 'react-bootstrap';

const Places = () => {
    const [places] = usePlaces();
    return (
        <div className="places-container">
            <h3 className="places-heading"><u>Tour Places</u></h3>
            <div className="places-card">
                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        places.map(place => <Place key={place._id} place={place}></Place>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Places;