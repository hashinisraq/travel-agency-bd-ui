import React, { useEffect, useState } from 'react';
import './BookingDetails.css';

const BookingDetails = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://dark-vault-49762.herokuapp.com/bookingDetails')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    return (
        <div className="booking-details">
            <h3><u>Booking Details</u></h3>
            {
                bookings.map(booking => <div key={booking._id}>
                    <h5><u>Name:</u> <small>{booking.displayName}</small></h5>
                    <h5><u>Phone:</u> <small>{booking.phone}</small></h5>
                    <h5><u>Email:</u> <small>{booking.email}</small></h5>
                    <h5><u>Place Name:</u> <small>{booking.name}</small></h5>
                    <h5><u>Pakage:</u> <small>{booking.pakage}</small></h5>
                    <h5><u>Description:</u> <small>{booking.details}</small></h5>
                    <h5><u>Status:</u> <small style={{ color: "red" }}>{booking.status}</small></h5>
                </div>)
            }
        </div>
    );
};

export default BookingDetails;