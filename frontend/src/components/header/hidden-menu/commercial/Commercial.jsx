import React from 'react';
import './commercial.css';
import BottomLinks from '../bottomLinks/BottomLinks';

function Commercial() {
  return (
    <>
      <div className='hidden-commercial'>
        <div className='commercial-col-one'>
          <p className='arenda-choice-list'>
            <strong>Аренда</strong>
          </p>

          <a href='#' className='arenda-items'>
            Аренда офиса
          </a>
        </div>
        <div className='commercial-col-two'>
          <p className='sell-choice-list'>
            <strong>Продажа</strong>
          </p>
          <a href='#' className='sell-choice-items'>
            Продажа офиса
          </a>
        </div>
        <div className='commercial-col-three'>
          <a href='#' className='some-choice-list'>
            Бизнес-центры
          </a>
          <a href='#' className='some-choice-list'>
            Торговые центры
          </a>
          <a href='#' className='some-choice-list'>
            Складские комплексы
          </a>
        </div>
        <div className='bottomMenu-for-comm'>
          <BottomLinks />
        </div>
      </div>
    </>
  );
}

export default Commercial;
