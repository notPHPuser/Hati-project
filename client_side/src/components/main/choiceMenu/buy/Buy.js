import React, { useState } from 'react';
import './buy.css';
import WhereBuy from './whereBuy/WhereBuy';
import HowRooms from './howRooms/HowRooms';
import Price from './price/Price';

function Buy() {
  const [ChoseWhereBuy, ChosesetWhereBuy] = useState(false);
  const [howrooms, setrooms] = useState(false);
  const [price, setPrice] = useState(false);

  function hideHati() {
    ChosesetWhereBuy(!ChoseWhereBuy);
    setrooms(false);
    // document.getElementById('howRooms').classList.add('hide');
    // if ((document.getElementById('whereBuy').style.display = 'none')) {
    //   document.getElementById('arrow').classList.add('arrow-rotate');
    // }
  }

  function hideRooms() {
    setrooms(!howrooms);
    ChosesetWhereBuy(false);
    document.getElementById('whereBuy').classList.add('hide');
    document.getElementById('howRooms').classList.remove('hide');
    document.getElementById('howRooms').classList.add('showItems');
  }

  function hidePrice() {
    setPrice(!price);
  }

  return (
    <>
      <div className='buy-main-choice'>
        <button onClick={hideHati} className='what-we-choice'>
          Квартиру в новостойке и второчке
          <div id='arrow' className='arrow'></div>
        </button>

        <button onClick={hideRooms} className='how-many-rooms'>
          Комнат
        </button>
        <button onClick={hidePrice} className='cena-for-hati'>
          Цена
        </button>
        <input type='text' className='search-menu' placeholder='Город, адрес, метро' />
      </div>
      {ChoseWhereBuy && (
        <div id='whereBuy' className='whereBuy'>
          <WhereBuy />
        </div>
      )}
      {howrooms && (
        <div id='howRooms' className='howRooms'>
          <HowRooms />
        </div>
      )}

      {price && (
        <div id='price'>
          <Price />
        </div>
      )}
    </>
  );
}

export default Buy;
