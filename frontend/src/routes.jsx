import { Component } from 'react';
import {
  APARTPAGE,
  ARENDA,
  BUYFLAT,
  BUYROOM,
  CREATE,
  CREATEOWN,
  ENTER,
  LOGRES,
  MAIN,
  PROFILE,
  SELL,
} from './utilits/consts.jsx';
import Profile from './pages/profile/Profile';
import CreateMyself from './pages/create_myself/CreateMyself';
import Create from './pages/create_announcement/Create';
import App from './App';
import Arenda from './pages/arenda/Arenda';
import Sell from './pages/sell/Sell';
import LoginOrReg from './components/log-res/LoginOrReg';
import AlreadyHave from './components/log-res/AlreatyHave/AlreadyHave';
import OfrtenFlat from './pages/OftenList/buyFlat/OfrtenFlat';
import BuyRoom from './pages/OftenList/buyRoom/BuyRoom';
import DevicePage from './pages/devicePage/DevicePage';

export const authRoutes = [
  {
    path: PROFILE,
    Component: Profile,
  },
  {
    path: CREATEOWN,
    Component: CreateMyself,
  },
  {
    path: CREATE,
    Component: Create,
  },
];

export const publicRoutes = [
  {
    path: MAIN,
    Component: App,
  },
  {
    path: ARENDA,
    Component: Arenda,
  },
  {
    path: SELL,
    Component: Sell,
  },
  {
    path: LOGRES,
    Component: LoginOrReg,
  },
  {
    path: ENTER,
    Component: AlreadyHave,
  },
  {
    path: BUYFLAT,
    Component: OfrtenFlat,
  },
  {
    path: BUYROOM,
    Component: BuyRoom,
  },
  {
    path: APARTPAGE + '/:id',
    Component: DevicePage,
  },
];
