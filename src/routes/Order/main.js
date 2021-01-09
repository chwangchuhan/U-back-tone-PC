import React, { Component } from 'react';
import T from 'prop-types'
import { connect, router } from 'dva';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Spin, Form, Steps, Button, Result, Input, Upload, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SelectFreedom from './container/select-freedom'

import './index.less';
const { Link } = router;
const { Content } = Layout;
const FormItem = Form.Item;

const { Step } = Steps;

class TipButton extends Component {
  static propTypes = {
    children: T.any,
    onClick: T.func,
  }

  render() {
    return <div className="tip-button" onClick={this.props.onClick}>{this.props.children}</div>
  }
}

const layout   = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
@connect(({ order, loading }) => ({
  order,
  isLoadingBusinessInfo: loading.effects['order/getBusinessInfo'],
  isLoadingMeals: loading.effects['order/getOrderGoodsMeals'],
}))
export default class Order extends Component {

  init = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'order/getBusinessInfo',
      payload: {}
    });
    dispatch({
      type: 'order/getOrderGoodsMeals',
      payload: {}
    });
  }

  // goHome = () => {
  //   this.props.history.replace('/')
  // }

  // 进入类目选择
  handleSetStep = step => {
    this.props.dispatch({
      type: 'order/setStep',
      payload: { step }
    })
  }

  // 设置当前订单套餐
  handleSetMeal = currentMeal => {
    this.props.dispatch({
      type: 'order/setCurrentMeal',
      payload: { currentMeal }
    })
  }

  // handleSubmit = form => {
  //   console.log(form)
  //   const { dispatch } = this.props;
    
  //   dispatch({
  //     type: 'verify/uoloadVerify',
  //     payload: {}
  //   });
  // }

  componentWillMount() {
    this.init()
  }

  render() {
    const { isLoadingBusinessInfo, isLoadingMeals, order } = this.props;
    const { step, businessInfo, goods, goodsMeals } = order
    console.log(goods)

    return (
      <div className="order-wrap">
        <Spin spinning={isLoadingBusinessInfo && isLoadingMeals}>
          {/* 添加订单入口 */}
          {step === 0 && (
            <div className="business-wrap" onClick={() => { this.handleSetStep(1) }}>
              <div className="add-icon-wrap">
                <PlusOutlined />
              </div>
              <div class="business-info-wrap">
                <div className="business-name">
                  {businessInfo.businessName}
                </div>
                <div className="business-id">
                  ID：{businessInfo.id}
                </div>
              </div>
            </div>
          )}

          {/* 下单选择项目 */}
          {step === 1 && (
            <div className="select-type">
             <TipButton onClick={() => { this.handleSetStep(2) }}>自由组合</TipButton>
             <TipButton onClick={() => { this.handleSetStep(3) }}>套餐选择</TipButton>
            </div>
          )}

          {/* 自由选择项目 */}
          {step === 2 && (
            <SelectFreedom />
          )}

          {/* 选择套餐项目 */}
          {step === 3 && (
            <div className="select-type" onClick={this.handleGoGoods}>
              {goodsMeals.map(item => {
                return (
                  <TipButton key={item.id} onClick={() => { this.handleSetMeal(item) }}>{item.label}</TipButton>
                )
              })}
            </div>
          )}
        </Spin>
      </div>
    );
  }
}
