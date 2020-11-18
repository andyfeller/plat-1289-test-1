import React, { lazy } from 'react';
import { Switch, Route } from 'react-router';

// Lazy imports allow you to use React suspense.
const Content = lazy(() => import('./pages/Content'));
const Demo = lazy(() => import('./pages/Demo'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Top-level routing using React router.
 */
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/demo">
        <Demo />
      </Route>
      <Route exact path="/">
        <Content />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
