import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '@/components/Loading';
import Home from '@/components/Home';
import ErrorPage from '@/components/ErrorPage';
import inject from '../utils/mobx-react-inject';
// import { appCode } from '@/utils';
const appCode = '/';

const Sales = React.lazy(() => import(/* webpackChunkName: "sales" */ '../pages/Sales'));

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path={`${appCode}`} component={Home} />
      <Route exact path={`${appCode}Home`} component={Home} />
      <Route exact path={`${appCode}Sales`} component={Sales} />
      <Redirect from="*" to={`${appCode}`} />
    </Switch>
  </Suspense>
);

export default Routes;
