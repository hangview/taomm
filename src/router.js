import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MmPage from './routes/MmPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route  exact path="/mm/:id"  component={MmPage} />
    </Router>
  );
}

export default RouterConfig;
