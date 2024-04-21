import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { LOGIN, MAIN, REGISTER } from '../../utilits/consts';
import './Auth.css';
import { login, registration } from '../../http/userAPI';

function Auth() {
  const location = useLocation();
  const isRegister = location.pathname === REGISTER;
  const [inlogin, setInLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const click = async () => {
    if (isRegister) {
      const response = await registration(inlogin, email, password);
      console.log(response);
    } else {
      const response = await login(inlogin, email, password);
      console.log(response);
    }
  };
  console.log(location);
  return (
    <>
      <div className='register'>
        <div className='reg-text'>
          <h1>{isRegister ? 'Зарегестироваться' : 'Войти'}</h1>
          {isRegister ? (
            <p>
              Уже есть аккаунт?{' '}
              <NavLink to={LOGIN} className='enter'>
                Войти
              </NavLink>
            </p>
          ) : (
            <div style={{ whiteSpace: 'nowrap' }}>
              <p style={{}}>
                Нету аккаунта?{' '}
                <NavLink to={REGISTER} className='enter'>
                  Зарегестироваться
                </NavLink>
              </p>
            </div>
          )}
        </div>
        <form>
          <input
            onChange={(e) => setInLogin(e.target.value)}
            value={inlogin}
            style={{}}
            className='reg_info'
            type='text'
            placeholder='login'
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='reg_info'
            type='text'
            placeholder='email'
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='reg_info'
            placeholder='password'
            type='password'
            required
          />

          {isRegister ? (
            <button onClick={click} className='reg_button' type='submit'>
              Зарегестрироваться
            </button>
          ) : (
            <button className='reg_button' type='submit'>
              Войти
            </button>
          )}
        </form>
        <NavLink className='link_to_hati' to={MAIN}>
          На глувную страницу
        </NavLink>
      </div>
    </>
  );
}

export default Auth;
