import React, { useState } from 'react';
import photo from '../../assets/photo1.png';
import './main.css';
import pik from './../../assets/pik.png';
import Buy from './choiceMenu/buy/Buy';
import Rent from './choiceMenu/rent/Rent';
import ForDay from './choiceMenu/forDay/ForDay';
import Header from '../header/Header';
import Discount from '../discount/Discount';
import OftenFind from '../oftenfind/OftenFind';
import ListOfDis from '../discount/listOfDis/ListOfDis';
import ListOfFlats from '../mayBeGood/ListOfFlats';
import ApartmentsList from '../apartmentsList/ApartmentsList';

function Main() {
  const [buy, setBuy] = useState(false);
  const [rent, setRent] = useState(false);
  const [forday, setforday] = useState(false);

  function forArenda() {
    setBuy(!buy);
    setRent(false);
    setforday(false);
    // document.getElementById('arenda-color').classList.add('add_main_choice');
  }

  function forRent() {
    setRent(!rent);
    setBuy(false);
    setforday(false);
  }

  function forForDay() {
    setforday(!forday);
    setRent(false);
    setBuy(false);
  }

  return (
    <>
      <Header />
      <div style={{ zIndex: 10 }} className='main'>
        <h1 className='skid'>Если недвижимость, то Хаты</h1>

        <ul className='list'>
          <li id='arenda-color' className='choice'>
            <a onClick={forArenda} href='#buy' className='link'>
              Купить
            </a>
            {buy && (
              <div id='arenda-id' className='choice-buy'>
                <Buy />
              </div>
            )}
          </li>
          <li className='choice'>
            <a onClick={forRent} href='#rent' className='link'>
              Снять
            </a>
            {rent && (
              <div id='rent-id' className='choice-rent'>
                <Rent />
              </div>
            )}
          </li>
          <li className='choice'>
            <a onClick={forForDay} href='#' className='link'>
              Посуточно
            </a>
            {forday && (
              <div id='forday-id'>
                <ForDay />
              </div>
            )}
          </li>
          <li className='choice'>
            <a href='#' className='link'>
              Посторить
            </a>
          </li>
          <li className='choice'>
            <a href='#' className='link'>
              Оценить
            </a>
          </li>
          <li className='choice'>
            <a href='#' className='link'>
              Новостойки
            </a>
          </li>
          <li className='choice'>
            <a href='#' className='link'>
              Отзывы
            </a>
          </li>
          <li className='choice'>
            <a href='#' className='link'>
              Разместить
            </a>
          </li>
        </ul>

        <a href='#' className='find'>
          Найти
        </a>
        <a className='photo-pik'>
          <img src={pik} alt='pik' className='pik' />
        </a>

        <img className='photo-main' src={photo} alt='' />
      </div>
      <Discount />
      <OftenFind />
      <div className='divGood' style={{}}>
        <ListOfFlats />
        <ApartmentsList />
      </div>
    </>
  );
}

export default Main;
