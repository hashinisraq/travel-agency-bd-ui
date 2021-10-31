import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import logo from '../../../images/logo.png';
import usePlaces from '../../../hooks/usePlaces';
import Place from '../../Places/Place/Place';
import { Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
    const [places] = usePlaces();
    let selectedPlaces = [];

    for (const place of places) {
        if (selectedPlaces.length < 6) {
            selectedPlaces.push(place);
        }
    }

    return (
        <div className="home-container">
            <div className="heading">
                <img src={logo} alt="" />
                <h5>Welcome To</h5>
                <h2>Travelling Agency Bangladesh</h2>
            </div>
            <div className="banner-container">
                <Banner></Banner>
            </div>
            <div className="selected-place-container">
                <h4><u>Tour Places</u></h4>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        selectedPlaces?.map(place => <Place key={place._id} place={place}></Place>)
                    }
                </Row>
            </div>
            <div className="about-container">
                <h4><u>About us</u></h4>
                <span style={{ color: "rgba(60, 60, 146, 0.856)" }}>
                    <About></About>
                </span>
            </div>
            <div className="contact-container">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;