import { query,getLike } from '../services/nv';

export default {
  namespace: 'nv',
  state: {
    list:[],
    searchList:[],
    currentPage:1
  },
  effects: {
    *fetch({payload},{call,put}) {
      const response = yield call(query,payload);
      yield put({
        type:'fetchList',
        list:response.data
      })
    },
    *changePage({payload},{call,put}) {
      if(payload && payload.page) {
        yield put({
          type: 'changePage',
          page: payload.page
        })
      }
    },
    *getLike({q},{call,put}) {
      if(q) {
        const response = yield call(getLike, q);
        yield put({
          type: 'getLike',
          list: response.data
        })
      }
    }
  },

  reducers: {
    fetchList(state,action) {
      return {
        ...state,
        list:action.list,
        searchList:[],
      }
    },
    getLike(state,action) {
      return {
        ...state,
        searchList:action.list
      }
    },
    changePage(state,action) {
      return {
        ...state,
        currentPage: action.page
      }
    }
  }
};
