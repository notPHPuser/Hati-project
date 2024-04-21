import React from 'react';
import './ApartmentsTwo.css';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { APARTMENTS } from '../../utilits/consts';
import { useNavigate } from 'react-router-dom';

function ApartmentsItem({ apartment }) {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <li onClick={() => navigate(APARTMENTS + '/' + apartment.id)} className='li_apartments_item'>
        <div>
          <img style={{ width: 315, height: 310, borderRadius: 10 }} src={apartment.img}></img>
          <p style={{ fontSize: 25, fontWeight: 700, top: -10, position: 'relative' }}>
            {apartment.price} ₽
          </p>
          <p style={{ position: 'relative', top: -25 }}>{apartment.name} </p>
        </div>
      </li>
    </>
  );
}

export default ApartmentsItem;
