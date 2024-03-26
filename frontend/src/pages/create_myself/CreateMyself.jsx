import React from 'react';
import { useState } from 'react';
import './CreateMyself.css';
import Header from '../../components/header/Header';
import axios from 'axios';

function CreateMyself() {
  const [radioSale, setRadioSale] = useState(false);
  const [rooms, setRooms] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [type, setType] = useState('');
  const [square, setSquare] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [Bathroom, setBathroom] = useState('');
  const [squareLiving, setSquareLiving] = useState('');
  const [squareKitchen, setSquareKitchen] = useState('');
  const [floor, setFloor] = useState('');

  const addApart = async () => {
    try {
      await axios.post('http://localhost:5001/api/aparts', {
        rooms,
        price,
        description,
        photo,
        type,
        square,
        kitchen,
        Bathroom,
        squareLiving,
        squareKitchen,
        floor,
      });

      setRooms('');
      setPrice('');
      setDescription('');
      setPhoto('');
      setType('');
      setSquare('');
      setKitchen('');
      setBathroom('');
      setSquareLiving('');
      setSquareKitchen('');
      setFloor('');
    } catch (error) {
      console.error(error);
    }
  };

  function ifRadioSale() {
    setRadioSale(!radioSale);
  }

  return (
    <>
      <Header />
      <div className='create_myself_page'>
        <p className='create_myself_page_p'>Самостоятельное создание анкеты</p>
        <div className='if_create_myself'>
          <form onSubmit={addApart} className='form_for_myself'>
            <p>Выберете функционал</p>
            <div>
              <input onClick={ifRadioSale} type='radio' name='create_mySelf' />
              <label>Продажа</label>
              {radioSale && (
                <div className='if_radio_sale'>
                  <p>Колличество комнат</p>
                  <input required min={0} max={7} type='number' className='rooms_radio_sale' />
                  <p className='p_rooms_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='total_area'>Общая площадь</p>
                  <input required min={0} max={200} type='number' className='area_radio_sale' />
                  <p className='p_area_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='living_space'>Жилая площадь</p>
                  <input required min={0} max={180} className='living_space_sale' type='number' />
                  <p className='p_living_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_kitchen_sale'>Кухня</p>
                  <input required min={0} max={50} type='number' className='kithcen_sale' />
                  <p className='p_kitchen_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  {/* <button type='submit'>Создать</button> */}
                </div>
              )}
              {/* <input type='radio' name='create_mySelf' />
              <label>Продажа</label> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateMyself;
