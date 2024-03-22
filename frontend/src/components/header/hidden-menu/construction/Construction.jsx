import React from 'react';
import './construction.css';
import BottomLinks from '../bottomLinks/BottomLinks';

function Construction() {
  return (
    <>
      <div className='hidden-construction'>
        <div className='col-construction-one'>
          <a href='#' className='choice-construction'>
            Проекты домов
          </a>
          <a href='#' className='choice-construction'>
            Строительные компании
          </a>
          <a href='#' className='choice-construction'>
            Консультация по строительству
          </a>
        </div>
        <div className='bottomLinks-construction'>
          <BottomLinks />
        </div>
      </div>
    </>
  );
}

export default Construction;
