// import { routerRedux } from 'dva';
import { getOrderHistoryList } from '../service';
// import $$ from 'cmn-utils';

export default {
  namespace: 'orderHistory',

  state: {
    list: [], // 订单列表
  },

  subscriptions: {},

  effects: {
    // 获取订单列表
    *getOrderHistory({ payload }, { call, put }) {
      const res = yield getOrderHistoryList(payload);
      yield put({
        type: 'setOrderHistory',
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

    // 设置订单列表
    setOrderHistory(state, { payload }) {
      return {
        ...state,
        list: payload.list
      }
    },
  }
};
