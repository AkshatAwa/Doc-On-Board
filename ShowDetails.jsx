import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowDetails.css';

function ShowDetails({ id }) {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/doctors/${id}`);
        setDoctorDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching the doctor details. Please try again later.');
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [id]);


  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="doctor-details">
      {doctorDetails && (
        <>
          <h1 className="doctor-name">{doctorDetails.name}</h1>
          <p className="doctor-info">Timing: {doctorDetails.starttime} till {doctorDetails.endtime}</p>
          <p className="doctor-info">Place of Sitting: {doctorDetails.location}</p>
          <button className="appointment-button">Make Appointment</button>
        </>
      )}
    </div>
  );
}

export default ShowDetails;