import React, {PureComponent} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Alert, Pagination, Card, Avatar, Divider } from 'antd';
import './IndexPage.css';

export default class FavPage extends PureComponent {


  componentDidMount(){
  }

  render(){
    return (
      <div>
        <Alert
          message="敬请期待"
          description="蛋儿样."
          type="info"
          showIcon
        />
      </div>
    )
  }
}


