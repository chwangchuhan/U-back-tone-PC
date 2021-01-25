// import { routerRedux } from 'dva';
import { getMonthBillList, getBillList } from '../service';
// import $$ from 'cmn-utils';

export default {
  namespace: 'billList',

  state: {
    list: [], // 报告列表
  },

  subscriptions: {},

  effects: {
    // 获取月账单列表
    *getMonthBillList({ payload }, { call, put }) {
      const res = yield getMonthBillList(payload);
      yield put({
        type: 'setBillList',
        payload: res.data,
      });
    },
    *getBillList({ payload }, { call, put }) {
      const res = yield getBillList(payload);
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
