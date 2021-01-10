// import { routerRedux } from 'dva';
import { getBusinessInfo, getOrderGoodsList, getOrderGoodsMeal, submitOrder } from '../service';
// import $$ from 'cmn-utils';

export default {
  namespace: 'order',

  state: {
    /**
     * 当前所处阶段 
     * 
     * 0 选择订单方式
     * 1 订单自选
     * 2 订单预选 
     * 3 选择套餐项目
     * 4 候选人基础信息
     * 5 候选人模板预览列表
     * 6 订单提交成功
     */
    step: -1,         
    goods: [],        // 订单商品
    goodsMeals: [],   // 获取订单商品套餐
    businessInfo: {}, // 公司信息
    currentMeal: {},  // 当前选中的meal
  },

  subscriptions: {},

  effects: {
    // 获取订单商品列表
    *getOrderGoods({ payload }, { call, put }) {
      const res = yield getOrderGoodsList(payload);
      yield put({
        type: 'setGoods',
        payload: res.data,
      });
    },

    // 获取订单商品列表
    *getOrderGoodsMeals({ payload }, { call, put }) {
      const res = yield getOrderGoodsMeal(payload);
      yield put({
        type: 'setGoodsMeal',
        payload: res.data,
      });
    },


    // 获取注册公司详情
    *getBusinessInfo({ payload }, { call, put }) {
      const res = yield getBusinessInfo(payload);
      yield put({
        type: 'setBusinessInfo',
        payload: res.data,
      });
    },

    *submitOrder({ payload }, { call, put }) {
      const res = yield submitOrder(payload);
      return res
    },
  },

  reducers: {
    // 设置当前所处订单页状态
    setStep(state, { payload }) {
      return {
        ...state,
        step: payload.step
      }
    },

    // 设置商品订单数据
    setGoods(state, { payload }) {
      return {
        ...state,
        goods: payload.groups
      }
    },

    // 设置公司信息
    setBusinessInfo(state, { payload }) {
      return {
        ...state,
        step: 0,
        businessInfo: payload,
      }
    },

    // 设置商品订单套餐
    setGoodsMeal(state, { payload }) {
      return {
        ...state,
        goodsMeals: payload.meals
      }
    },

    // 设置当前选中的套餐数据
    setCurrentMeal(state, { payload }) {
      return {
        ...state,
        currentMeal: payload.currentMeal
      }
    },
  }
};
