import React, {PureComponent} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Pagination, Card, Avatar } from 'antd';
import './IndexPage.css';
const { Header, Content , Sider} = Layout;


@connect (state => ({
  mm: state.mm.currentMm
}))

export default class MmPage extends PureComponent {

  fetchData(userId){
    this.props.dispatch({
      type:'mm/get',
      payload: {
        userId: userId
      }
    })
  }

  componentDidMount(){
    this.fetchData(this.props.params.id);
  }

  render(){
    let mm = this.props.mm;
    if(mm && mm.imgList instanceof  Array && mm.imgList.length >0){
      if(mm.cardUrl){
        mm.imgList = [mm.cardUrl,...mm.imgList];
      }
    }

    return (
      <div id="mmPage">
        <Layout>
            <Header>
              <h1 className="header">TaoMM</h1>
            </Header>
            <Card>
              {mm?
                <div className="mm-title">
                  <Avatar src={mm.avatarUrl} size="large"/>
                  <h2>{mm.realName}</h2>
                  <p>城市: {mm.city}</p>
                  <p>类型: {mm.type}</p>
                  <p>身高: {mm.height}</p>
                  <p>体重: {mm.weight}</p>
                  <p>关注: {mm.totalFanNum}</p>
                </div>
                :''
              }
            </Card>
            <Card className="mm-detail-pic">
                {mm&&mm.imgList&&mm.imgList.length>0? mm.imgList.map(url => (<img key={url} src={url} />)):''}
            </Card>
        </Layout>

      </div>
    )
  }
}


