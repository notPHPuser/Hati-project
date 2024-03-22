import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
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

const Header = () => {
  return (
    <>
      <header>
        <ul className='list-verx'>
          <li className='hati'>
            <Link to='/' className='hati-name'>
              HATI
            </Link>
          </li>
          <li id='arenda' className='menu'>
            <Link to='/arenda' className='menu-list'>
              Аренда
            </Link>
            <div className='ArendaMenu'>
              <ArendaMenu />
            </div>
          </li>

          <li id='sale' className='menu'>
            <Link to='/sell' className='menu-list'>
              Продажа
            </Link>
            <div className='saleMenu'>
              <SaleMenu />
            </div>
          </li>
          <li id='newBuildings' className='menu'>
            <a href='#' className='menu-list'>
              Новостройка
            </a>
            <div className='newBuildingsMenu'>
              <NewBuildings />
            </div>
          </li>
          <li id='construction' className='menu'>
            <a href='#' className='menu-list'>
              Строительство
            </a>
            <div className='constructionMenu'>
              <Construction />
            </div>
          </li>
          <li id='commercial' className='menu'>
            <a href='#' className='menu-list'>
              Коммерческая
            </a>
            <div className='commercialMenu'>
              <Commercial />
            </div>
          </li>
          <li className='menu'>
            <a href='#' className='menu-list'>
              Сервисы
            </a>
          </li>
          <li className='menu'>
            <a id='fresh' href='#' className='menu-list'>
              FRESH
            </a>
          </li>
        </ul>
        <a href='#' className='glass-href'>
          <img src={glass} alt='' className='glass-photo' />
          <div className='glass-info'>
            <p className='glass-info-text'>Поиск</p>
          </div>
        </a>
        <a href='#' className='chat-href'>
          <img src={chat} alt='' className='chat-photo' />
          <div className='chat-info'>
            <p className='chat-info-text'>Сообщения</p>
          </div>
        </a>
        <a href='#' className='house-href'>
          {/*это кнопка "ваши объявления"*/} <img src={house} alt='' className='house-photo' />
          <div className='house-info'>
            <p className='house-info-text'>Ваши Объявления</p>
          </div>
        </a>

        <a href='#' className='bell-href'>
          <img src={bell} alt='' className='bell-photo' />
          <div className='bell-info'>
            <p className='bell-info-text'>Уведомления</p>
          </div>
        </a>
        <a href='#' className='liked-href'>
          <img src={liked} alt='' className='liked-photo' />
          <div className='liked-info'>
            <p className='liked-info-text'>Понравилось</p>
          </div>
        </a>
        <Link to='/create' className='plus'>
          +Разместить бесплатно
        </Link>
        <Link className='profile-href' to='/log-res'>
          <img className='profile-photo' src={profile} alt='' />
          <div className='profile-info'>
            <p className='profile-info-text'>Ваш профиль</p>
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
