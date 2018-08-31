import React from 'react';
import { Router, Route } from 'dva/router';
import { routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MmPage from './routes/MmPage';
import FavorPage from './routes/FavPage';
import { Layout, Pagination } from 'antd';

const { Header } = Layout;

function RouterConfig({ history }) {
  const clickName = () => {
    history.push('/');
  };
  const clickFavor = () => {
    history.push('/favor');
  }
  return (
    <div>
      <Layout>
        <Header className="main-header">
          <h1 onClick={clickName} className="header" >TaoMM</h1>
          <h3 onClick={clickFavor} style={{float:'right'}}>我的收藏</h3>
        </Header>
        <div>
          <Router history={history}>
            <Route path="/" component={IndexPage} />
            <Route  exact path="/mm/:id" component={MmPage} />
            <Route  exact path="/favor" component={FavorPage} />
          </Router>
        </div>
      </Layout>
    </div>
  );
}

export default RouterConfig;
