import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Patient.css";
import Patpage from "./Patient.jpeg";

function Patient() {
    let navigate = useNavigate();

    const [patient, setPatient] = useState({
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      number: "",
      doctorId: ""
    });
  
    const { firstname, lastname, age, email, number, doctorId } = patient;
  
    const onInputChange = (e) => {
      setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleDoctorChange = (event) => {
      setPatient({ ...patient, doctorId: event.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8080/patients", patient);
        navigate(`/patient/${doctorId}`);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/getdoctors')
        .then(response => {
          setDoctors(response.data);
        })
        .catch(error => {
          console.error('Error fetching doctors data:', error);
        });
    }, []);

    return (
      <>
        <img src={Patpage} className="pimg" alt="Sorry Image not Loaded"/>
        <div className="pbox">
          <div className="pinsidebox">
            <div className="pheading">Kindly Fill all the Details</div>
            <form onSubmit={handleSubmit}>
              <div className="pname">
                <input type="text" placeholder='First Name (eg. Akshat)' id='fn' className="pinput" name='firstname' required value={firstname} onChange={onInputChange} />
                <input type="text" placeholder='Last Name (eg. Awasthi)' id='ln' className="pinput" name='lastname' required value={lastname} onChange={onInputChange} />
              </div>
              <div className="pdetails">
                <label htmlFor="page" className='label'>Age</label>
                <input type="number" placeholder='Enter your Age here' id='page' name='age' required value={age} onChange={onInputChange} />
                <label htmlFor="pemail" className='label'>Email ID</label>
                <input type="email" placeholder='Enter your EmailID here' id='pemail' name='email' required value={email} onChange={onInputChange} />
                <label htmlFor="pnum" className='label'>Number</label>
                <input type="tel" placeholder='Enter your Mobile Number here' id='pnum' name='number' required value={number} onChange={onInputChange} />
              </div>
              <div className="selectdoc">
                <div className="sd">Select the Doctor For Consultancy</div>
                <div className="selection">
                  <select value={doctorId} onChange={handleDoctorChange} required>
                    <option value="">Select the Doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>Dr.{doctor.name}({doctor.speciality})</option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="pbtn" type='submit'>Search For Appointment</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Patient;
