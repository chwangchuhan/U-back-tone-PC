import React, { Component } from 'react';
import T from 'prop-types'
import { connect, router } from 'dva';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Result, Button, Spin, Modal, Typography, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SelectGoodsMeals from './container/select-goods-meals'
import SelectFreedom from './container/select-freedom'
import SelectCandidate from './container/select-candidate'
import PreviewCandidateList from './container/preview-candidate-list'
import TipButton from './components/tip-button'

import './index.less';

const { Link } = router

@connect(({ order, loading }) => ({
  order,
  isLoadingBusinessInfo: loading.effects['order/getBusinessInfo'],
  isLoadingMeals: loading.effects['order/getOrderGoodsMeals'],
}))
export default class Order extends Component {
  state = {
    // 自由选中的商品
    freeSelectsGoods: [],
    candidateList: [{ name: '帅猫', phone: 17826855166, gender: '男', email: 'chwangchuhan@163.com' }],
    currentMeal: null, // 当前选中的套餐
  }

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

  // 自由选择商品选择成功
  handleSubmitFreedom = selectGoods => {
    this.setState({
      freeSelectsGoods: selectGoods,
    })
    this.handleSetStep(4)
  }
  
  // 选择套餐选择成功
  handleSubmitGoodsMeal = goodsMeal => {
    this.setState({
      currentMeal: goodsMeal,
    })
    this.handleSetStep(4)
  }

  // 提交候选人
  handleSubmitCandidate = candidateList => {
    this.setState({
      candidateList,
    })
    this.handleSetStep(5)
  }

  // 提交订单
  handleSubmitOrder = () => {
    Modal.confirm({
      title: '确认生成订单？',
      className: 'order-commit-modal',
      content: (
        <div class="order-commit-wrap">
          <div className="order-commit-url-wrap">
            http://modao.cc/app/sdfsdlkfhjkhwerjkh12478612
          </div>
          <div className="desc-item">
            上述在线授权链接将以邮件、短信的方式发送给
            <Typography.Text type="danger">[{this.state.candidateList.map(item => item.name).join('、')}]</Typography.Text>
          </div>
          <div className="desc-item">
            请仔细确认后提交
          </div>
        </div>
      ),
      onOk: async () => {
        const { freeSelectsGoods, candidateList, currentMeal } = this.state
        const payload = { candidateList }

        // 自由商品提交
        if (freeSelectsGoods.length) {
          payload.freeSelectsGoods = freeSelectsGoods
        }

        // 套餐提交
        if (currentMeal) {
          payload.mealId = currentMeal.id
        }

        message.loading({
          content: '提交中',
          key: 'global'
        })
        
        await this.props.dispatch({
          type: 'order/submitOrder',
          payload,
        })
        message.success({
          content: '提交成功',
          key: 'global'
        })
        this.handleSetStep(6)
      },
    })
  }

  componentWillMount() {
    this.init()
  }

  render() {
    const { isLoadingBusinessInfo, isLoadingMeals, order } = this.props;
    const { step, businessInfo, goods, goodsMeals } = order
    // console.log(goods)

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
            <SelectFreedom onSubmit={this.handleSubmitFreedom}/>
          )}

          {/* 选择套餐项目 */}
          {step === 3 && (
            <SelectGoodsMeals goodsMeals={goodsMeals} onSubmit={this.handleSubmitGoodsMeal} />
          )}

          {/* 候选人基础信息 */}
          {step === 4 && (
            <SelectCandidate candidateUsers={this.state.candidateList} onSubmit={this.handleSubmitCandidate}/>
          )}

          {/* 候选人模板预览列表 */}
          {step === 5 && (
             <PreviewCandidateList
              candidateUsers={this.state.candidateList}
              onGoAdd={() => { this.handleSetStep(4) }}
              onSubmit={this.handleSubmitOrder}
            />
          )}

           {/* 提交成功 */}
           {step === 6 && (
              <Result
                status="success"
                title="订单提交成功"
                subTitle={`邮件已发送给候选人：${this.state.candidateList.map(item => item.name).join('、')}`}
                extra={[
                  <Button type="primary" key="console">
                    <Link to="/sign/register">立即查看订单</Link>
                  </Button>,
                ]}
              />
            )}
        </Spin>
      </div>
    );
  }
}
