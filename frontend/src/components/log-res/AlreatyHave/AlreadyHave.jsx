import React from 'react';
import './AlreadyHave.css';
import { Link } from 'react-router-dom';

function AlreadyHave() {
  return (
    <>
      <div className='AlreadyHave'>
        <h1 className='enter_h1'>Вход</h1>
        <form>
          <input type='text' className='log_info' placeholder='login' required />
          <input type='password' className='log_info' placeholder='password' required />
          <button className='enter_button' type='submit'>
            Войти
          </button>
        </form>
        <Link to='/' className='link_to_main'>
          На главную
        </Link>
      </div>
    </>
  );
}

export default AlreadyHave;
