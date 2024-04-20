import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { MAIN } from './utilits/consts';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '.';

function AppRouter() {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN} />
    </Switch>
  );
}

export default AppRouter;
