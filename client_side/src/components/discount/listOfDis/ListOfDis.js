import React from 'react';
import './ListOfDis.css';
import fresh from '../../../assets/fresh.png';
import pik_logo from '../../../assets/pik_logo.png';
import a101 from '../../../assets/a101.png';
import lsr from '../../../assets/lsr.png';

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
        <a className='listOfDis'>
          <p className='name_company'>Группа А101</p>
          <p className='ipoteka_persent'>Ипотека 6,5%</p>
          <p className='do_ipoteka'>До 05.09.2024</p>
          <img src={a101} alt='' className='a101_img' />
          <p className='ipoteka'>Ипотека</p>
        </a>
        <a className='listOfDis'>
          <p className='name_company'>Группа ЛСР</p>
          <p className='ipoteka_persent'>Ипотека 7%</p>
          <p className='do_ipoteka'>До 10.11.2024</p>
          <img src={lsr} alt='' className='lsr_img' />
          <p className='ipoteka'>Ипотека</p>
        </a>
      </div>
    </>
  );
}

export default ListOfDis;
