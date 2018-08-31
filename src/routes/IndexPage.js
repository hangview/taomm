import React, {PureComponent} from 'react';
import { connect } from 'dva';
import { Layout, Pagination } from 'antd';
import './IndexPage.css';
import PicCard from "../components/PicCard";
const { Header, Content } = Layout;


@connect (state => ({
  list: state.nv.list
}))

export default class IndexPage extends PureComponent {

  fetchData(page){
    this.props.dispatch({
      type:'nv/fetch',
      payload: {
        page: page
      }
    })
  }

  componentDidMount(){
    this.fetchData(1);
  }
  onPageChange(current){
    this.fetchData(current);
  }

  render(){
    let lists = this.props.list;
    let List = !(lists instanceof Array && lists.length >0)?'...':(
        lists.map(user => <PicCard key={user.userId} nv={user} />)
      );
    return (
      <div>
        <Header>
          <h1 className="header">TaoMM</h1>
        </Header>
        <Content>
            <div className="index-page">
              <Pagination showQuickJumper onChange={(current) => this.onPageChange(current)} defaultCurrent={1} total={17295} pageSize={50} />
            </div>
            {List}
        </Content>

      </div>
    )
  }

}


