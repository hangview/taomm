import React, {PureComponent} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Pagination } from 'antd';
import './IndexPage.css';
import PicCard from "../components/PicCard";
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
    let MM = !mm?'...':(<PicCard key={mm.userId}  nv={mm} />);

    return (
      <div>
        <Layout>
            <Header>
              <h1 className="header">TaoMM</h1>
            </Header>
            <Layout>
              <Sider>{MM}</Sider>
              <Content>
                {mm&&mm.imgList.length>0?
                  mm.imgList.map(url => (<img src={url} />)):''}
              </Content>
            </Layout>
        </Layout>

      </div>
    )
  }
}


