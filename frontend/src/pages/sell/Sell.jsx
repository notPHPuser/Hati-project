import React from 'react';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import './sell.css';
import OftenFind from '../../components/oftenfind/OftenFind';

function Sell() {
  return (
    <>
      <Header />
      <Main />
      <div className='search'>
        <OftenFind />
      </div>
    </>
  );
}

export default Sell;
