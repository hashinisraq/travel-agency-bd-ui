import React, { useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import usePlaces from '../../hooks/usePlaces';

const Booking = () => {
    const { placeId } = useParams();
    const { user } = useAuth();
    const [places] = usePlaces();
    const phoneRef = useRef();

    const selectedPlace = places.filter(place => place._id === placeId);

    const { displayName, email } = user;
    const _id = selectedPlace[0]?._id;
    const name = selectedPlace[0]?.name;
    const pakage = selectedPlace[0]?.pakage;
    const details = selectedPlace[0]?.details;

    console.log(user);

    const handleBooking = () => {
        const status = 'pending';
        let phone = phoneRef?.current.value;

        if (phone !== "") {
            fetch('https://dark-vault-49762.herokuapp.com/bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ _id, displayName, email, name, pakage, phone, details, status })
            })
                .then(res => res.json())
                .then(result => {
                })
            phoneRef.current.value = "";
            alert('Successfully placed your booking. We will confrim your booking soon.');
        }
        else {
            alert("Please add your phone number.");
        }
    }

    return (
        <div style={{ padding: "80px" }}>
            <h3 style={{ paddingBottom: "20px" }}><u>Place Booking</u></h3>
            <form className="row g-2" style={{ border: "1px solid blue", padding: "30px" }}>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Name </label>
                    <input defaultValue={displayName} type="text" className="form-control" id="" required disabled />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Email </label>
                    <input defaultValue={email} type="text" className="form-control" id="" required disabled />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Phone </label>
                    <input ref={phoneRef} type="number" className="form-control" id="" required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Place Name: </label>
                    <input defaultValue={name} type="name" className="form-control" id="inputEmail4" required disabled />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Pakage Days: </label>
                    <input defaultValue={pakage} type="text" className="form-control" id="" required disabled />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Description: </label>
                    <textarea defaultValue={details} type="text" className="form-control" id="" required disabled />
                </div>
                <div className="col-12">
                    <input className="add-btn" onClick={e => {
                        e.preventDefault();
                        handleBooking();
                    }} type="submit" value="Place Booking" />
                </div>
            </form>



        </div>
    );
};

export default Booking;