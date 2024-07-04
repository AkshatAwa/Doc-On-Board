import axios from "axios";
import React, { useState } from 'react';
import "./Doctor.css";
import Docpage from "./Docpage.jpeg";
import { useNavigate } from "react-router-dom";

function Doctor() {
  let navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    number: "",
    speciality: "",
    fees: "",
    email: ""
  });

  const { name, number, speciality, fees, email } = doctor;

  const onInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/doctors", doctor);
      navigate("/doctor/docsetdetails");
    } catch (error) {
      if (error.response) {
        console.error('Error submitting data:', error.response.data);
      } else {
        console.error('Error submitting data:', error.message);
      }
    }
  };

  return (
    <>
      <img src={Docpage} className="dimg" alt="Sorry Image not Loaded"/>
      <form className="dbox" onSubmit={handleSubmit}>
        <div className="dheading">Register Here</div>
        <div className="form">
          <label htmlFor="name">Doctor's Name</label>
          <input type="text" placeholder='Enter Your Name' required className='input' id='name' name='name' value={name} onChange={onInputChange} />
          <label htmlFor="number">Doctor's Contact Number</label>
          <input type="tel" placeholder='Enter your Mobile Number' required className='input' id='number' name='number' value={number} onChange={onInputChange} />
          <label htmlFor="username">Doctor's Speciality</label>
          <input type="text" placeholder='Enter Your Speciality' required className='input' id='username' name='speciality' value={speciality} onChange={onInputChange} />
          <label htmlFor="fees">Doctor's Fees</label>
          <input type="number" placeholder='Enter Your Enquiry Fees' required className='input' id='fees' name='fees' value={fees} onChange={onInputChange} />
          <label htmlFor="email">Doctor's EmailID</label>
          <input type="email" className="input" placeholder="Enter your Email here" required id='email' name="email" value={email} onChange={onInputChange} />
          <button className="dbtn" type="submit">Register</button>
        </div>
      </form>
    </>
  );
}

export default Doctor;
