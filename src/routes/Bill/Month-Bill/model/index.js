// import { routerRedux } from 'dva';
import { getMonthBillList } from '../service';
// import $$ from 'cmn-utils';

export default {
  namespace: 'billMonthList',

  state: {
    list: [], // 报告列表
  },

  subscriptions: {},

  effects: {
    // 获取月账单列表
    *getMonthBillList({ payload }, { call, put }) {
      const res = yield getMonthBillList(payload);
      yield put({
        type: 'setMonthBillList',
        payload: res.data,
      });
    },
  },

  reducers: {
    // 初始化所有状态
    resetState(state) {
      return {
        list: [],
      }
    },

    // 设置报告列表
    setMonthBillList(state, { payload }) {
      return {
        ...state,
        list: payload.list
      }
    },
  }
};
