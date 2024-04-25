import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import './Create.css';
import Header from '../../components/header/Header';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createApartament } from '../../http/apartamentAPI';
import { flowResult } from 'mobx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MAIN } from '../../utilits/consts';
// import axios from 'axios';

const Create = observer(() => {
  const navigate = useNavigate();
  const { apartment } = useContext(Context);
  const [name, setName] = useState('');
  // const [rooms, setRooms] = useState('');
  const [price, setPrice] = useState('');
  // const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  // const [type, setType] = useState('');
  // const [square, setSquare] = useState('');
  // const [Bathroom, setBathroom] = useState('');
  // const [squareLiving, setSquareLiving] = useState('');
  // const [squareKitchen, setSquareKitchen] = useState('');
  // const [floor, setFloor] = useState('');
  const [radioSale, setRadioSale] = useState(false);

  // const addApartment = async () => {
  //   try {
  //     await axios.post('http://localhost:5000/api/apartment', { name, price, img });
  //     setName('');
  //     setPrice('');
  //     setPhoto('');
  //   } catch (error) {}
  // };

  const add = async (e) => {
    e.preventDefault();
    let data;
    data = await createApartament(name, price, photo);
    navigate(MAIN);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result.split(',')[1]);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const selectFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setPhoto(base64);
  };

  function ifRadioSale() {
    setRadioSale(!radioSale);
  }
  return (
    <>
      <Header />
      <div className='create_myself_page'>
        <p className='create_myself_page_p'>Самостоятельное создание объявления </p>
        <div className='if_create_myself'>
          <form onSubmit={add} className='form_for_myself'>
            <p>Выберите функциональность</p>
            <div>
              <input onClick={ifRadioSale} type='radio' name='create_mySelf' />
              <label className='label_create_myself'>Продажа</label>
              {radioSale && (
                <div className='if_radio_sale'>
                  <p style={{ position: 'absolute', top: -100, left: 250 }}>Название</p>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type='text'
                    className='whatName'
                    required
                    style={{ left: 250 }}
                  ></input>
                  <p>Колличество комнат</p>
                  <input
                    // value={rooms}
                    // onChange={(e) => setRooms(e.target.value)}
                    min={1}
                    max={7}
                    type='number'
                    readOnly
                    className='rooms_radio_sale'
                  />

                  <p className='total_area'>Общая площадь</p>
                  <input
                    // value={square}
                    // onChange={(e) => setSquare(e.target.value)}
                    min={1}
                    max={200}
                    type='number'
                    readOnly
                    className='area_radio_sale'
                  />
                  <p className='p_area_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='living_space'>Жилая площадь</p>
                  <input
                    // value={squareLiving}
                    // onChange={(e) => setSquareLiving(e.target.value)}
                    min={1}
                    max={150}
                    readOnly
                    className='living_space_sale'
                    type='number'
                  />
                  <p className='p_living_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_kitchen_sale'>Кухня</p>
                  <input
                    // value={squareKitchen}
                    // onChange={(e) => setSquareKitchen(e.target.value)}
                    min={1}
                    readOnly
                    max={40}
                    type='number'
                    className='kithcen_sale'
                  />
                  <p className='p_kitchen_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_batroom_sale'>Ванная</p>
                  <input
                    // value={Bathroom}
                    // onChange={(e) => setBathroom(e.target.value)}
                    max={2}
                    min={1}
                    readOnly
                    type='number'
                    className='bathroom_sale'
                  />
                  <p className='p_bathroom_radio_sale'>кол-во</p>
                  <p
                    // value={floor}
                    // onChange={(e) => setFloor(e.target.value)}
                    className='p_floor_sale'
                  >
                    Этаж
                  </p>
                  <input min={1} readOnly max={50} className='floor_sale' type='number' />

                  <p className='p_price_sale'>Цена</p>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type='number'
                    min={1}
                    required
                    max={500000000}
                    className='price_sale'
                  />
                  <p className='p_price_radio_sale'>руб</p>
                  <p
                    style={{
                      position: 'absolute',
                      zIndex: -1,
                      left: 630,
                      top: 100,
                      display: 'flex',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Квартира или дом
                  </p>
                  <select className='what'>
                    {apartment.types.map((types) => (
                      <option
                        // value={type} onChange={(e) => setType(e.target.value)}
                        key={types.id}
                      >
                        {types.name}
                      </option>
                    ))}
                  </select>
                  <p className='p_description_sale'>Описание</p>
                  <textarea
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                    className='description_sale'
                    type='textarea'
                    readOnly
                  />
                  <p className='p_photo_sale'>Добавьте фото</p>
                  <input
                    // value={photo}
                    onChange={selectFile}
                    type='file'
                    required
                    className='photo_sale'
                  />
                  <button type='submit' className='submit_sale'>
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
});

export default Create;
