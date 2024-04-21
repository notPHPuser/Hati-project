import React, { useContext } from 'react';
import './header.css';
import profile from '../../assets/profile.png';
import liked from '../../assets/heart.png';
import bell from '../../assets/bell.png';
import house from '../../assets/home.png';
import chat from '../../assets/chat.png';
import glass from '../../assets/glass.png';
import ArendaMenu from './hidden-menu/arendaMenu/ArendaMenu';
import SaleMenu from './hidden-menu/saleMenu/SaleMenu';
import NewBuildings from './hidden-menu/newBuildings/NewBuildings';
import Construction from './hidden-menu/construction/Construction';
import Commercial from './hidden-menu/commercial/Commercial';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../..';
import { CREATE, MAIN, PROFILE, REGISTER } from '../../utilits/consts';
import { observable, observe } from 'mobx';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logIn = () => {
    user.setIsAuth(true);
  };
  return (
    <>
      <header>
        <ul className='list-verx'>
          <li className='hati'>
            <NavLink to={MAIN} className='hati-name'>
              HATI
            </NavLink>
          </li>
          <li id='arenda' className='menu'>
            <NavLink to={MAIN} className='menu-list'>
              Аренда
            </NavLink>
            <div className='ArendaMenu'>
              <ArendaMenu />
            </div>
          </li>

          <li id='sale' className='menu'>
            <NavLink to={MAIN} className='menu-list'>
              Продажа
            </NavLink>
            <div className='saleMenu'>
              <SaleMenu />
            </div>
          </li>
          <li id='newBuildings' className='menu'>
            <a href='' className='menu-list'>
              Новостройка
            </a>
            <div className='newBuildingsMenu'>
              <NewBuildings />
            </div>
          </li>
          <li id='construction' className='menu'>
            <a href='' className='menu-list'>
              Строительство
            </a>
            <div className='constructionMenu'>
              <Construction />
            </div>
          </li>
          <li id='commercial' className='menu'>
            <a href='' className='menu-list'>
              Коммерческая
            </a>
            <div className='commercialMenu'>
              <Commercial />
            </div>
          </li>
          <li className='menu'>
            <a href='' className='menu-list'>
              Сервисы
            </a>
          </li>
          <li className='menu'>
            <a id='fresh' href='' className='menu-list'>
              FRESH
            </a>
          </li>
        </ul>
        <a href='' className='glass-href'>
          <img src={glass} alt='' className='glass-photo' />
          <div className='glass-info'>
            <p className='glass-info-text'>Поиск</p>
          </div>
        </a>
        <a href='' className='chat-href'>
          <img src={chat} alt='' className='chat-photo' />
          <div className='chat-info'>
            <p className='chat-info-text'>Сообщения</p>
          </div>
        </a>
        <a href='' className='house-href'>
          {/*это кнопка "ваши объявления"*/} <img src={house} alt='' className='house-photo' />
          <div className='house-info'>
            <p className='house-info-text'>Ваши Объявления</p>
          </div>
        </a>

        <a href='' className='bell-href'>
          <img src={bell} alt='' className='bell-photo' />
          <div className='bell-info'>
            <p className='bell-info-text'>Уведомления</p>
          </div>
        </a>
        <a href='' className='liked-href'>
          <img src={liked} alt='' className='liked-photo' />
          <div className='liked-info'>
            <p className='liked-info-text'>Понравилось</p>
          </div>
        </a>

        {user.isAuth ? (
          <div>
            <a onClick={() => history.push(CREATE)} className='plus'>
              +Разместить бесплатно
            </a>
            <NavLink className='profile-href' to={PROFILE}>
              <img className='profile-photo' src={profile} alt='' />
              <div className='profile-info'>
                <p className='profile-info-text'>Ваш профиль</p>
              </div>
            </NavLink>
          </div>
        ) : (
          <NavLink className='profile-href' to={REGISTER}>
            <img onClick={logIn} className='profile-photo' src={profile} alt='' />
            <div className='profile-info'>
              <p className='profile-info-text'>Войти</p>
            </div>
          </NavLink>
        )}
      </header>
    </>
  );
});

export default Header;
