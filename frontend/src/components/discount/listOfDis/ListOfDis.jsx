import React from 'react';
import './ListOfDis.css';
import fresh from '../../../assets/fresh.png';
import pik_logo from '../../../assets/pik_logo.png';
import a101 from '../../../assets/a101.png';

function ListOfDis() {
  return (
    <>
      <div className='allListDis'>
        <a className='listOfDis'>
          <p className='name_company'>Донстрой</p>
          <p className='ipoteka_persent'>Ипотека 6,8%</p>
          <p className='do_ipoteka'>До 30.06.2024</p>
          <img src={fresh} className='fresh_img' alt='' />
          <p className='ipoteka'>Ипотека</p>
        </a>
        <a className='listOfDis'>
          <p className='name_company'>Группа ПИК</p>
          <p className='ipoteka_persent'>Ипотека 6%</p>
          <p className='do_ipoteka'>До 25.09.2024</p>
          <img src={pik_logo} className='pik_img' alt='' />
          <p className='ipoteka'>Ипотека</p>
        </a>
        <a className='listOfDis'></a>
        <a className='listOfDis'></a>
      </div>
    </>
  );
}

export default ListOfDis;
