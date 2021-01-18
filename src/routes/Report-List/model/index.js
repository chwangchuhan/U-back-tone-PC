// import { routerRedux } from 'dva';
import { getRpeortList } from '../service';
// import $$ from 'cmn-utils';

export default {
  namespace: 'report',

  state: {
    list: [], // 报告列表
  },

  subscriptions: {},

  effects: {
    // 获取报告列表
    *getReportList({ payload }, { call, put }) {
      const res = yield getRpeortList(payload);
      yield put({
        type: 'setReportList',
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
    setReportList(state, { payload }) {
      return {
        ...state,
        list: payload.list
      }
    },
  }
};
