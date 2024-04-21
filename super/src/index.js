import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import ApartmentsStore from './store/ApartmentsStore';

export const Context = createContext({
  user: new UserStore(),
  apartment: new ApartmentsStore(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider
    value={{
      user: new UserStore(),
      apartment: new ApartmentsStore(),
    }}
  >
    <App />
  </Context.Provider>,
);
