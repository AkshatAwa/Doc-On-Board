import React, { useState, useEffect } from 'react';
import "./DoctorDetails.css";
import axios from "axios";

function DoctorDetails() {
    const [submitted, setSubmitted] = useState(false);

    const [doctordetails] = useState({
        starttime: '',
        endtime: '',
        location: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/doctor/docsetdetails", doctordetails);
            setSubmitted(true);
            setTimeout(() => {setSubmitted(false);},5000);
        } catch (error) {
            if (error.response) {
                console.error('Error submitting data:', error.response.data);
            } else {
                console.error('Error submitting data:', error.message);
            }
        }
    }

    return (
        <div className="container">
            {submitted && <p className='message'>Time Updated Successfully!!</p>}
            <div className="ddouterbox">
                <div className="ddheading">Select the particular Field</div>
                <div className="ddinnerbox">
                        <form onSubmit={handleSubmit}>
                            <div className="formdetails">
                                <div className="scrollable-container">
                                    <span className="formd1">
                                        <input type="time" name="starttime" id='st' required/>
                                        <p>TO</p>
                                        <input type="time" name="endtime" id='et' required/>
                                        <input type="text" name="location" placeholder='Enter your location of Seating' id='ddd' required/>
                                    </span>
                                </div>
                            </div>
                            <div className="ddbtn">
                                <button type="submit" className='iddbtn'>Submit</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default DoctorDetails;