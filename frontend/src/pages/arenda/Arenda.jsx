import React from 'react';
import './arenda.css';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import OftenFind from '../../components/oftenfind/OftenFind';

function Arenda() {
  return (
    <div>
      <Header />
      <Main />
      <div className='main-information-arenda'>
        <OftenFind />
      </div>
    </div>
  );
}

export default Arenda;
