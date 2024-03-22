import React from 'react';
import { Link } from 'react-router-dom';
import './OftenFind.css';
import choiceOBflat from '../../assets/OBflat.png';
import choiceOBroom from '../../assets/OBroom.png';
import choiceOBhouse from '../../assets/OBhouse.png';
import choiceOBroom2 from '../../assets/OBroom2.png';

function OftenFind() {
  return (
    <>
      <div className='OftenFind'>
        <p className='findP'>Часто ищут</p>
        <div className='choiceOB'>
          <Link to='/buyFlat' className='choiceFlat'>
            <img className='OBflat' src={choiceOBflat} alt='' />
            <p>Купить квартиру</p>
          </Link>

          <Link to='/buyRoom' className='choiceRoom'>
            <img src={choiceOBroom} className='OBroom' alt='' />
            <p>Купить комнату</p>
          </Link>
          <a className='choiceHouse' href='#'>
            <img className='OBhouse' src={choiceOBhouse} alt='' />
            <p>Купить дом</p>
          </a>
          <a className='choiceRoomTwo' href='#'>
            <img className='OBflat2' src={choiceOBroom2} alt='' />
            <p>Снять квартиру</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default OftenFind;
