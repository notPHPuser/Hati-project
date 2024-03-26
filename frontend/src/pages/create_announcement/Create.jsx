import React from 'react';
import './Create.css';
import Header from '../../components/header/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Create() {
  const [arenda, setArenda] = useState(false);
  const [sale, setSale] = useState(false);
  const [long, setLong] = useState(false);
  const [arendaDay, setarendaDay] = useState(false);
  // const [rooms, setRooms] = useState('');
  // const [price, setPrice] = useState('');
  // const [description, setDescription] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [type, setType] = useState('');
  // const [square, setSquare] = useState('');
  // const [kitchen, setKitchen] = useState('');
  // const [Bathroom, setBathroom] = useState('');

  // const addApart = async () => {
  //   try {
  //     await axios.post('http://localhost:5001/api/aparts', {
  //       rooms,
  //       price,
  //       description,
  //       photo,
  //       type,
  //       square,
  //       kitchen,
  //       Bathroom,
  //     });

  //     setRooms('');
  //     setPrice('');
  //     setDescription('');
  //     setPhoto('');
  //     setType('');
  //     setSquare('');
  //     setKitchen('');
  //     setBathroom('');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  function ifArenda() {
    setArenda(!arenda);
    document.getElementById('create_arenda').classList.add('deal_add');
    document.getElementById('create_sale').classList.remove('deal_add');
  }

  function ifLong() {
    setLong(!long);
    document.getElementById('long_arenda').classList.add('deal_add');
    // document.getElementById('day_arenda').classList.remove('deal_add');
  }

  function ifSale() {
    setSale(!sale);
    document.getElementById('create_sale').classList.add('deal_add');
    document.getElementById('create_arenda').classList.remove('deal_add');
  }

  function ifArendaDay() {
    setarendaDay(!arendaDay);
    document.getElementById('day_arenda').classList.add('deal_add');
    document.getElementById('long_arenda').classList.remove('deal_add');
  }

  return (
    <>
      <Header />
      <p className='p_free_create'>
        Собственники могут <strong>бесплатно</strong> <br /> разместить по одному объявлению <br />в
        каждой категории жилой <br /> недвижимости
      </p>

      <a href='' className='rules_create'>
        Условия бесплатного размещения
      </a>
      <a href='' className='rules_for_all_create'>
        Общие правила
      </a>
      <div className='create_a'>
        <p className='new_create'>Новое объявление</p>
        <p className='new_deal'>Сделка</p>

        <button id='create_arenda' onClick={ifArenda} className='deal_options'>
          Аренда
        </button>
        {arenda && (
          <div className='if_arenda'>
            <p className='new_arenda'>Аренда</p>
            <button id='long_arenda' onClick={ifLong} className='arenda_options'>
              Долгострочная
            </button>
            <button id='day_arenda' onClick={ifArendaDay} className='arenda_options'>
              Посуточная
            </button>
          </div>
        )}
        {long && (
          <div className='longArenda'>
            <p>Жилая недвижемость</p>
            <button name='long_one' className='long_options'>
              Квартира
            </button>
            <button className='long_options'>Комната</button>
            <button className='long_options'>Коттедж</button>
          </div>
        )}
        {arendaDay && (
          <div className='arendaDay'>
            <p>Объект</p>
            <button className='day_option'>Квартира</button>
            <button className='day_option'>Комната</button>
            <button className='day_option'>Дом</button>
          </div>
        )}
        <button id='create_sale' onClick={ifSale} className='deal_options'>
          Продажа
        </button>

        {sale && (
          <div className='sale_announcement'>
            <p>Жилая недвижемость</p>
            <button className='sale_choice_menu'>Квартира</button>
            <button className='sale_choice_menu'>Квартира в новосройке</button>
            <button className='sale_choice_menu'>Коттедж</button>
            <p>Коммерческая</p>
            <button className='long_options'>Офис</button>
            <button className='long_options'>Здание</button>
            <button className='long_options'>Склад</button>
          </div>
        )}
        <Link to='/create_own' className='create_myself'>
          Создать самому
        </Link>
      </div>
    </>
  );
}

export default Create;
