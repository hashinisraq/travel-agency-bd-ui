import React, { useRef } from 'react';
import './AddTrip.css';
import useAuth from '../../hooks/useAuth';

const AddTrip = () => {
    const { user } = useAuth()
    const nameRef = useRef();
    const pakageRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const handleAddTrip = () => {
        const name = nameRef.current.value;
        const pakage = pakageRef.current.value;
        const details = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newPlace = { name, img, pakage, details };

        // admin access email: legenderyalif@gmail.com
        if (user.email === "legenderyalif@gmail.com") {
            if (name && img && pakage && details !== "") {
                fetch('https://dark-vault-49762.herokuapp.com/addplace', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newPlace)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('Successfully added your trip.');
                            nameRef.current.value = "";
                            pakageRef.current.value = "";
                            descriptionRef.current.value = "";
                            imgRef.current.value = "";
                        }
                    })
            }
            else {
                alert('Please add all the information.');
                nameRef.current.value = "";
                pakageRef.current.value = "";
                descriptionRef.current.value = "";
                imgRef.current.value = "";
            }
        }
        else {
            alert("Sorry, only admin access.");
        }
    }

    return (
        <div>
            <div className="pt-4">
                <h4><u>Add New Trip</u></h4>
            </div>
            <form className="row g-3 add-trip">
                <div className="col-12">
                    <label htmlFor="" className="form-label">Place Name: </label>
                    <input type="name" className="form-control" id="inputEmail4" placeholder="Thakurgaon" ref={nameRef} required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Pakage Days: </label>
                    <input type="text" className="form-control" id="" placeholder="4 Days" ref={pakageRef} required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Description: </label>
                    <textarea type="text" className="form-control" id="" placeholder="Famour and historical for etc" ref={descriptionRef} required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Image url: </label>
                    <input type="text" className="form-control" id="" placeholder="https://i.ibb.co/Y39z4MN/Kolatoli-Beach.jpg" ref={imgRef} required />
                </div>
                <div className="col-12">
                    <input className="add-btn" onClick={e => {
                        e.preventDefault();
                        handleAddTrip();
                    }} type="submit" value="Add Trip" />
                </div>
            </form>
        </div>
    );
};

export default AddTrip;