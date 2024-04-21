import React from 'react';
import './newBuildings.css';
import book from '../../../../assets/book.png';
import photo3 from '../../../../assets/photo3.png';
import BottomLinks from '../bottomLinks/BottomLinks';

function NewBuildings() {
  return (
    <>
      <div className='new-menu'>
        <div className='newB-col-one'>
          <a href='' className='choice-newB'>
            Квартиры
          </a>
          <a href='' className='choice-newB'>
            Каталог жилых комплексов
          </a>
          <a href='' className='choice-newB'>
            Каталог коттеджных поселков
          </a>
          <a href='' className='choice-newB'>
            Каталог акций и скидок
          </a>
        </div>
        <div className='newB-col-two'>
          <img className='book-for-newB' src={book} alt='' />
          <p className='how-to-sail-for-newB'>Хаты.Помошь</p>
        </div>
        <img src={photo3} alt='' className='photo3' />
        <div className='bottomMenu-for-newB'>
          <BottomLinks />
        </div>
      </div>
    </>
  );
}

export default NewBuildings;
