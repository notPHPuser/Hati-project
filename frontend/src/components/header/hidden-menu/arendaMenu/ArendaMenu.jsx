import React from 'react';
import './arendaMenu.css';
import book from '../../../../assets/book.png';
import houseAndMoney from '../../../../assets/houseAndMoney.png';
import BottomLinks from '../bottomLinks/BottomLinks';

function ArendaMenu() {
  return (
    <>
      <div className='hidden-arenda'>
        <div className='grid-one'>
          <a href='#' className='long-arenda'>
            <strong>Длительная аренда</strong>
          </a>
          <a href='#' className='apartments'>
            Квартиры
          </a>
          <a href='#' className='rooms-arenda'>
            Комнаты
          </a>
          <a href='#' className='houses'>
            Дома и коттеджи
          </a>
          <a href='#' className='rent'>
            <strong>Посуточная аренда</strong>
          </a>
          <a href='#' className='pass'>
            <strong>Сдать</strong>
          </a>
        </div>
        <div className='grid-two'>
          <img src={book} alt='' className='book-photo' />
          <strong>
            <p className='help'>Хаты.Помощь</p>
          </strong>
          <a href='#' className='how'>
            Как снять или сдать квартиру
          </a>
          <a href='#' className='how-two'>
            Как купить или продать квартиру
          </a>
        </div>
        <img src={houseAndMoney} alt='' className='houseAndMoney' />
        <div className='bottomLinks-arenda'>
          <BottomLinks />
        </div>
      </div>
    </>
  );
}

export default ArendaMenu;
