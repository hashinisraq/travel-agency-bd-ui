import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="menu-bar" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/places">Places</Nav.Link>
                        {user?.email ? <Nav.Link as={HashLink} to="/bookingDetails">Bookings</Nav.Link> : ''}
                        {user?.email ? <Nav.Link as={HashLink} to="/inventory">Inventory</Nav.Link> : ''}
                        {user?.email ? <Nav.Link as={HashLink} to="/addTrip">Add Trip</Nav.Link> : ''}
                        {user?.email ? <Button 
                        onClick={logOut}
                        variant="light">Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;