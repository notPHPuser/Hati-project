import React from 'react';
import './discount.css';
import ListOfDis from './listOfDis/ListOfDis';

function Discount() {
  return (
    <div className='discount'>
      <h1 className='discount-info'>Акции и скидки на новостройки</h1>
      <ListOfDis />
    </div>
  );
}

export default Discount;
