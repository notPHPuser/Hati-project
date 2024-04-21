import React from 'react';
import './salemenu.css';
import book from '../../../../assets/book.png';
import house2 from '../../../../assets/house2.png';
import BottomLinks from '../bottomLinks/BottomLinks';

function SaleMenu() {
  return (
    <>
      <div className='sale-menu'>
        <div className='col-one'>
          <a href='' className='choice'>
            Квартиры
          </a>
          <a href='' className='choice'>
            Комнаты
          </a>
          <a href='' className='choice'>
            Участки
          </a>
          <a href='' className='choice'>
            Дома и коттеджи
          </a>
          <a href='' className='choice'>
            Продать
          </a>
        </div>
        <div className='col-two'>
          <img className='book' src={book} alt='' />
          <strong>
            <p className='help-two'>Хаты.Помощь</p>
          </strong>
          <a href='' className='how-to-sail'>
            Как купить или продать квартиру
          </a>
        </div>
        <img src={house2} alt='' className='photo2' />
        <div className='bottomMenu-for-sale'>
          <BottomLinks />
        </div>
      </div>
    </>
  );
}

export default SaleMenu;
