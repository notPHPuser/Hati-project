import React, { useState, useEffect } from 'react';
import './listOfFlats.css';
import axios from 'axios';

function ListOfFlats() {
  const [apart, setApart] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchAparts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/aparts');
        setApart(response.data);
        setImage(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAparts();
  }, []);

  return (
    <>
      <div className='listOfFlats'>
        <p className='p-maybegood'>Могут подойти</p>
        {apart.map((aparts) => (
          <li key={aparts.id}>
            <p className='sqq'>{aparts.description}</p>
            {image && <img src={image} alt='qwe' />}
          </li>
        ))}
      </div>
    </>
  );
}

export default ListOfFlats;
