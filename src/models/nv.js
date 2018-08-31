import { query } from '../services/nv';

export default {
  namespace: 'nv',
  state: {
    list:[],
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
      console.log(payload);
      if(payload && payload.page) {
        yield put({
          type: 'changePage',
          page: payload.page
        })
      }
    }

  },
  reducers: {
    fetchList(state,action) {
      return {
        ...state,
        list:action.list
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
