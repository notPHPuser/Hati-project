import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { MAIN, REGISTER } from '../../utilits/consts';
import './Auth.css';

function Auth() {
  return (
    <>
      <div className='register'>
        <div className='reg-text'>
          <h1>Зарегестироваться</h1>
          <p>
            Уже есть аккаунт?{' '}
            <NavLink to={REGISTER} className='enter'>
              Войти
            </NavLink>
          </p>
        </div>
        <form>
          <input className='reg_info' type='text' placeholder='login' required />
          <input className='reg_info' type='text' placeholder='email' required />
          <input className='reg_info' placeholder='password' type='password' required />
          <button className='reg_button' type='submit'>
            Зарегестрироваться
          </button>
        </form>
        <NavLink className='link_to_hati' to={MAIN}>
          На глувную страницу
        </NavLink>
      </div>
    </>
  );
}

export default Auth;
