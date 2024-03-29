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
              <label className='label_create_myself'>Продажа</label>
              {radioSale && (
                <div className='if_radio_sale'>
                  <p>Колличество комнат</p>
                  <input
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    required
                    min={1}
                    max={7}
                    type='number'
                    className='rooms_radio_sale'
                  />

                  <p className='total_area'>Общая площадь</p>
                  <input
                    value={square}
                    onChange={(e) => setSquare(e.target.value)}
                    required
                    min={1}
                    max={200}
                    type='number'
                    className='area_radio_sale'
                  />
                  <p className='p_area_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='living_space'>Жилая площадь</p>
                  <input
                    value={squareLiving}
                    onChange={(e) => setSquareLiving(e.target.value)}
                    required
                    min={1}
                    max={150}
                    className='living_space_sale'
                    type='number'
                  />
                  <p className='p_living_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_kitchen_sale'>Кухня</p>
                  <input
                    value={squareKitchen}
                    onChange={(e) => setSquareKitchen(e.target.value)}
                    required
                    min={1}
                    max={40}
                    type='number'
                    className='kithcen_sale'
                  />
                  <p className='p_kitchen_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_batroom_sale'>Ванная</p>
                  <input
                    value={Bathroom}
                    onChange={(e) => setBathroom(e.target.value)}
                    required
                    max={2}
                    min={1}
                    type='number'
                    className='bathroom_sale'
                  />
                  <p className='p_bathroom_radio_sale'>кол-во</p>
                  <p className='p_floor_sale'>Этаж</p>
                  <input
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    required
                    min={1}
                    max={50}
                    className='floor_sale'
                    type='number'
                  />

                  <p className='p_price_sale'>Цена</p>
                  <input
                    type='number'
                    required
                    min={1}
                    max={500000000}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='price_sale'
                  />
                  <p className='p_price_radio_sale'>руб</p>
                  <p className='p_description_sale'>Описание</p>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='description_sale'
                    required
                    type='textarea'
                  />
                  <p className='p_photo_sale'>Добавьте фото</p>
                  <input
                    type='file'
                    className='photo_sale'
                    value={photo}
                    required
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                  <button className='submit_sale' type='submit'>
                    Создать
                  </button>
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
