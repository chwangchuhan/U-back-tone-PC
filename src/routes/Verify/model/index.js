import { routerRedux } from 'dva';
// import { login } from '../service';
import $$ from 'cmn-utils';

export default {
  namespace: 'verify',

  state: {
    loading: false,
    step: -1,
  },

  subscriptions: {},

  effects: {
    // 获取认证信息详情
    *getVerifyInfo({ payload }, { call, put }) {
      const res = yield $$.post('/business/verify/info', payload);
      console.log(res)
      yield put({
        type: 'setVerifyInfo',
        payload: res.data,
      });
    },

    *uoloadVerify({ payload }, { call, put }) {
      const res = yield $$.post('/business/verify/upload', payload);
      console.log(res)
      yield put({
        type: 'setVerifyInfo',
        payload: { step: 1 },
      });
    },
  },

  reducers: {
    setVerifyInfo(state, { payload }) {
      return {
        ...state,
        step: payload.step
      }
    },
  }
};
