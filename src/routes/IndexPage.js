import React, {PureComponent} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Pagination,Input } from 'antd';
import './IndexPage.css';
import PicCard from "../components/PicCard";
const { Content } = Layout;
const { Search } = Input;


@connect (state => ({
  list: state.nv.list,
  searchList:state.nv.searchList,
  currentPage: state.nv.currentPage
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
    if(!this.props.searchList.length > 0) {
      this.fetchData(this.props.currentPage);
    }
  }
  onPageChange(current){
    if(current) {
      this.props.dispatch({
        type: 'nv/changePage',
        payload: {
          page: current
        }
      })
      this.fetchData(current);
    }
  }
  goMM(userId){
    this.props.dispatch(routerRedux.push(`/mm/${userId}`));
  }
  search(value){
    if(value) {
      this.props.dispatch({
        type: 'nv/getLike',
        q: value
      })
    }else{
      this.fetchData(this.props.currentPage);
    }
  }

  render(){
    let isSearching = this.props.searchList && this.props.searchList.length > 0;
    let lists = isSearching?this.props.searchList : this.props.list;
    let List = !(lists instanceof Array && lists.length >0)?'':(
        lists.map(user => <PicCard key={user.userId} picClick={(userId)=>this.goMM(userId) } nv={user} />)
      );
    return (
      <Content>
        <div className="index-page">
          <div style={{margin:'10px 20px'}}>
            <Search
              placeholder="搜索内容空时可退出搜索状态"
              onSearch={value => this.search(value)}
              enterButton
            />
          </div>
          <Pagination  style={{display:isSearching?'none':'block'}}  showQuickJumper  current={this.props.currentPage} onChange={(current) => this.onPageChange(current)} defaultCurrent={this.props.currentPage} total={17295} pageSize={50} />
        </div>
        {List}
      </Content>
    )
  }

}


