import React from 'react';
import { Switch, Route, redirect, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes.jsx';

const AppRoute = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} />
      ))}
    </Routes>
  );
};

export default AppRoute;
