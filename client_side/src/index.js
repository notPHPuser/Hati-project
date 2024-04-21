import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import ApartmentsStore from './store/ApartmentsStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      apartment: new ApartmentsStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
