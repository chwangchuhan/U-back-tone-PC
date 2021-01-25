// import { routerRedux } from 'dva';
import { getHistoryBillList } from '../service';
// import $$ from 'cmn-utils';

export default {
  namespace: 'historyBillList',

  state: {
    list: [], // 账单列表
  },

  subscriptions: {},

  effects: {
    // 获取历史账单列表
    *getHistoryBillList({ payload }, { call, put }) {
      const res = yield getHistoryBillList(payload);
      yield put({
        type: 'setBillList',
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

    // 设置账单列表
    setBillList(state, { payload }) {
      return {
        ...state,
        list: payload.list
      }
    },
  }
};
