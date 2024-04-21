import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './components/header/Header';
import { action } from 'mobx';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';

const App = action(() => {
  const { user } = useContext(Context);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoding(false));
  }, []);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
