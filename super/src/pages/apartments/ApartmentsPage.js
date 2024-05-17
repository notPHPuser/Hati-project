import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApartmentDetails = ({ id }) => {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const fetchApartmentData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/apartment/${id}`);
        setApartment(response.data);
      } catch (error) {
        console.error('Error fetching apartment data:', error);
      }
    };

    fetchApartmentData();
  }, [id]);

  return (
    <div>
      {apartment ? (
        <div>
          <h2>{apartment.title}</h2>
          <p>{apartment.description}</p>
          {/* Render other apartment data fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApartmentDetails;
