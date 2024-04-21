import React, { useContext } from 'react';
import { useState } from 'react';
import './Create.css';
import Header from '../../components/header/Header';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
// import axios from 'axios';

const Create = observer(() => {
  const { apartment } = useContext(Context);
  const [radioSale, setRadioSale] = useState(false);
  function ifRadioSale() {
    setRadioSale(!radioSale);
  }
  return (
    <>
      <Header />
      <div className='create_myself_page'>
        <p className='create_myself_page_p'>Самостоятельное создание объявления </p>
        <div className='if_create_myself'>
          <form className='form_for_myself'>
            <p>Выберете функционал</p>
            <div>
              <input onClick={ifRadioSale} type='radio' name='create_mySelf' />
              <label className='label_create_myself'>Продажа</label>
              {radioSale && (
                <div className='if_radio_sale'>
                  <p>Колличество комнат</p>
                  <input required min={1} max={7} type='number' className='rooms_radio_sale' />

                  <p className='total_area'>Общая площадь</p>
                  <input required min={1} max={200} type='number' className='area_radio_sale' />
                  <p className='p_area_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='living_space'>Жилая площадь</p>
                  <input required min={1} max={150} className='living_space_sale' type='number' />
                  <p className='p_living_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_kitchen_sale'>Кухня</p>
                  <input required min={1} max={40} type='number' className='kithcen_sale' />
                  <p className='p_kitchen_radio_sale'>
                    м<sup>2</sup>
                  </p>
                  <p className='p_batroom_sale'>Ванная</p>
                  <input required max={2} min={1} type='number' className='bathroom_sale' />
                  <p className='p_bathroom_radio_sale'>кол-во</p>
                  <p className='p_floor_sale'>Этаж</p>
                  <input required min={1} max={50} className='floor_sale' type='number' />

                  <p className='p_price_sale'>Цена</p>
                  <input type='number' required min={1} max={500000000} className='price_sale' />
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
                      <option key={types.id}>{types.name}</option>
                    ))}
                  </select>
                  <p className='p_description_sale'>Описание</p>
                  <textarea className='description_sale' required type='textarea' />
                  <p className='p_photo_sale'>Добавьте фото</p>
                  <input type='file' className='photo_sale' required />
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
});

export default Create;
