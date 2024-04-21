import React, { useContext } from 'react';
import { Switch, Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { MAIN } from './utilits/consts';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '.';

function AppRouter() {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} exact />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
      <Route path='*' element={<Navigate to={MAIN} />} />
    </Routes>
  );
}

export default AppRouter;
