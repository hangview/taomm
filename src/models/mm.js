import {getMm} from '../services/nv';

export default {
  namespace: 'mm',
  state: {
    currentMm:null,
  },
  effects: {
    *get({payload},{call,put}) {
      const response = yield call(getMm,payload);
      yield put({
        type:'getMm',
        item:response.data
      })
    }

  },
  reducers: {
    getMm(state,action) {
      return {
        ...state,
        currentMm:action.item
      }
    }
  }
};
