import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Inventory = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://dark-vault-49762.herokuapp.com/bookingDetails')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const currentBooking = bookings.filter(booking=>booking.email === user.email);
    
    const handleDelete = id => {
        if (window.confirm("Are you sure to delete your trip?")) {
            const url = `https://dark-vault-49762.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                })
        }

    }
    return (
        <div className="booking-details">
            <h3><u>Booking Details</u></h3>
            {
                currentBooking.map(booking => <div key={booking._id}>
                    <h5><u>Name:</u> <small>{booking.displayName}</small></h5>
                    <h5><u>Phone:</u> <small>{booking.phone}</small></h5>
                    <h5><u>Email:</u> <small>{booking.email}</small></h5>
                    <h5><u>Place Name:</u> <small>{booking.name}</small></h5>
                    <h5><u>Pakage:</u> <small>{booking.pakage}</small></h5>
                    <h5><u>Description:</u> <small>{booking.details}</small></h5>
                    <h5><u>Status:</u> <small style={{ color: "red" }}>{booking.status}</small></h5>
                    {user.email === booking.email ? <Link to="#"
                    ><Button
                        onClick={() => handleDelete(booking._id)}
                        variant="secondary">Delete</Button></Link> : <Link to="#"
                        ><Button
                            onClick={() => handleDelete(booking._id)}
                            variant="danger" disabled>Delete</Button></Link>}
                </div>)
            }
        </div>
    );
};

export default Inventory;