import React, { useContext, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN, MAIN, REGISTER } from '../../utilits/consts';
import './Auth.css';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
import { login, registration } from '../../http/userAPI';
import { action } from 'mobx';
import { Context } from '../..';

const Auth = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const isRegister = location.pathname === REGISTER;
  const [inlogin, setInLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const click = async () => {
    try {
      let data;
      if (isRegister) {
        data = await registration(inlogin, email, password);
        // console.log(response);
      } else {
        data = await login(inlogin, email, password);
        // console.log(response);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(<MAIN />);
    } catch (e) {
      alert(e.response.data.massage('Неверно'));
    }
  };

  function tp() {
    if (true) {
      navigate(MAIN);
    }
  }

  // console.log(response);
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
        <form onSubmit={click}>
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
            <button className='reg_button' type='submit'>
              Зарегестрироваться
            </button>
          ) : (
            <button onClick={() => navigate(MAIN)} className='reg_button' type='submit'>
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
});

export default Auth;
