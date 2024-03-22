import React, { useState } from 'react';
import axios from 'axios';
import './log-res.css';
import { Link } from 'react-router-dom';

function LoginOrReg() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const addPost = async () => {
    try {
      await axios.post('http://localhost:5001/api/posts', { login, password, email });

      setLogin('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='register'>
        <div className='reg-text'>
          <h1>Зарегестироваться</h1>
          <p>
            Уже есть аккаунт?{' '}
            <Link to='/enter' className='enter'>
              Войти
            </Link>
          </p>
        </div>
        <form onSubmit={addPost}>
          <input
            className='reg_info'
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder='login'
            required
          />
          <input
            className='reg_info'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            required
          />
          <input
            className='reg_info'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            type='password'
            required
          />
          <button className='reg_button' type='submit'>
            Зарегестрироваться
          </button>
        </form>
        <Link className='link_to_hati' to='/'>
          На глувную страницу
        </Link>
      </div>
    </>
  );
}

export default LoginOrReg;
