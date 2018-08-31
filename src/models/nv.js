import { query } from '../services/nv';

export default {
  namespace: 'nv',
  state: {
    list:[],
  },
  effects: {
    *fetch({payload},{call,put}) {
      const response = yield call(query,payload);
      yield put({
        type:'fetchList',
        list:response.data
      })
    }

  },
  reducers: {
    fetchList(state,action) {
      return {
        ...state,
        list:action.list
      }
    }
  }
};
