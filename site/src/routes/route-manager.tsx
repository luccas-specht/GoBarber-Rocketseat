import React from 'react';
import { Switch} from 'react-router-dom';

import { routers } from '../constants';
import { PublicRoute } from './public-route';
import { PrivateRoute } from './private-route';

const RouteManger = (): JSX.Element => {
  const mapRoutes = (): JSX.Element[] => (
    routers.map(
      (route, key) =>
        route.isPublic ?
        <PublicRoute
          exact
          key={key}
          path={route.path}
          component={route.component}
        />
         :
        <PrivateRoute
          exact
          key={key}
          path={route.path}
          component={route.component}
        />
    )
  );
  return <Switch>{mapRoutes()}</Switch>;
};

export { RouteManger };
