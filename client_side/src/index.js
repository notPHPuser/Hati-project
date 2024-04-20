import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import ApartmentsPage from './pages/apartments/ApartmentsPage';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      apartments: new ApartmentsPage(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
