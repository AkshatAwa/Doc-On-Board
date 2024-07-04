import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DoctorGetDetails() {
  const { doctorId } = useParams();
  const [doctorh, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/patient/${doctorId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div key={doctorh.id}>
      <h2>Details of Dr.{doctorh.name}</h2>
      <div>
        <p>Doctor Name: {doctorh.name}</p>
        <p>Fees:{doctorh.fees}</p>
      </div>
    </div>
  );
}

export default DoctorGetDetails;