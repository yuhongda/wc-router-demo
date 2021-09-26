import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
const appCode = '/';

const Page1 = React.lazy(() => import(/* webpackChunkName: "page1" */ '../components/pages/page1'));
const Page2 = React.lazy(() => import(/* webpackChunkName: "page2" */ '../components/pages/page2'));

const Routes = () => (
  <Suspense fallback={'loading...'}>
    <Switch>
      <Route exact path={`${appCode}Page1`} component={Page1} />
      <Route exact path={`${appCode}Page2`} component={Page2} />
      <Redirect from="*" to={`${appCode}`} />
    </Switch>
  </Suspense>
);

export default Routes;
