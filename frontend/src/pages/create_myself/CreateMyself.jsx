import React from 'react';
import { useState } from 'react';
import './CreateMyself.css';
import Header from '../../components/header/Header';

function CreateMyself() {
  const [radioArenda, setRadioArenda] = useState(false);
  function ifRadioArenda() {
    setRadioArenda(!radioArenda);
  }

  return (
    <>
      <Header />
      <div className='create_myself_page'>
        <p className='create_myself_page_p'>Самостоятельное создание анкеты</p>
        <div className='if_create_myself'>
          <form className='form_for_myself'>
            <p>Выберете функционал</p>
            <div>
              <input onClick={ifRadioArenda} type='radio' name='create_mySelf' />
              <label>Аренда</label>
              {radioArenda && (
                <div className='if_radio_arenda'>
                  <p>Колличество комнат</p>
                  <select className='select_radio_arenda'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                  </select>
                </div>
              )}
              <input type='radio' name='create_mySelf' />
              <label>Продажа</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateMyself;
