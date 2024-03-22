import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Arenda from './pages/arenda/Arenda';
import Sell from './pages/sell/Sell';
import LoginOrReg from './components/log-res/LoginOrReg';
import OfrtenFlat from './pages/OftenList/buyFlat/OfrtenFlat';
import BuyRoom from './pages/OftenList/buyRoom/BuyRoom';
import ListReg from './components/log-res/ListReg';
import App from './App.jsx';
import Create from './pages/create_announcement/Create.jsx';
import Profile from './pages/profile/Profile.jsx';
import CreateMyself from './pages/create_myself/CreateMyself.jsx';
import AlreadyHave from './components/log-res/AlreatyHave/AlreadyHave.jsx';

const router = createBrowserRouter([
  {
    path: '/arenda',
    element: <Arenda />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sell',
    element: <Sell />,
  },
  {
    path: '/log-res',
    element: <LoginOrReg />,
  },
  {
    path: '/buyFlat',
    element: <OfrtenFlat />,
  },
  {
    path: '/buyRoom',
    element: <BuyRoom />,
  },
  {
    path: '/listReg',
    element: <ListReg />,
  },
  {
    path: '/create',
    element: <Create />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/create_own',
    element: <CreateMyself />,
  },
  {
    path: '/enter',
    element: <AlreadyHave />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
