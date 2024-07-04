import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./Staff.css";
import Stapage from "./Staff.jpeg";
import { useNavigate } from "react-router-dom";

function Staff() {
  let navigate = useNavigate();

  const [staff, setStaff] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    number: "",
    doctorId:""
  });

  const { firstname, lastname, username, password, number,doctorId } = staff;


  const onInputChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const handleDoctorChange = (event) => {
    setStaff({ ...staff, doctorId: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/staffs", staff);
      navigate(`/staff/${doctorId}`);
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
      <img src={Stapage} className="simg" alt="Sorry Image not Loaded"/>
      <div className="sbox">
        <div className="sinsidebox">
          <div className="pheading">Kindly Fill all the Details</div>
          <form onSubmit={handleSubmit}>
            <div className="sname">
              <input type="text" placeholder='First Name (eg. Akshat)' id='firstname' className="pinput" name='firstname' required value={firstname} onChange={onInputChange} />
              <input type="text" placeholder='Last Name (eg. Awasthi)' id='lastname' className="pinput" name='lastname' required value={lastname} onChange={onInputChange} />
            </div>
            <div className="sdetails">
              <label htmlFor="username" className='label'>Username</label>
              <input type="text" placeholder='Create a Username' id='sname' name='username' required value={username} onChange={onInputChange} />
              <label htmlFor="password" className='label'>Password</label>
              <input type="password" placeholder='Create a unique Password' id='spass' name='password' required value={password} onChange={onInputChange} />
              <label htmlFor="number" className='label'>Number</label>
              <input type="tel" placeholder='Enter your Mobile Number here' id='snum' name='number' required value={number} onChange={onInputChange} />
            </div>
            <div className="selection">
                  <select value={doctorId} onChange={handleDoctorChange} required>
                    <option value="">Select the Doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>Dr.{doctor.name}({doctor.speciality})</option>
                    ))}
                  </select>
            </div>
            <button className="sbtn" type="submit">Sign In</button>
          </form>
          <a href="/" className='login'>Already a Staff Member? Click Here</a>
        </div>
      </div>
    </>
  );
}

export default Staff;
