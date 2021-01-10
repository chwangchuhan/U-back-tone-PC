import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'dva';
import { Spin, Typography } from 'antd'
import { normal } from 'components/Notification';
import _ from 'lodash'

import GoodCard from '../components/goods-card'

const { Title, Paragraph } = Typography;

/**
 * 自由选择容器
 */
@connect(({ order, loading }) => ({
  order,
  isLoadingGoods: loading.effects['order/getOrderGoods'],
}))
export default class SelectFreedom extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired, // 提交商品选择
  }

  static defaultProps = {}

  state = {
    selectGoodsList: [],
  }

  init() {
    this.props.dispatch({
      type: 'order/getOrderGoods',
      payload: {}
    });
  }

  handleSelectGoods(goods) {
    const { selectGoodsList } = this.state

    // 找到选中项则移除
    if (_.findIndex(selectGoodsList, goods) !== -1) {
      _.remove(selectGoodsList, item => item.id === goods.id)
    } else {
      // 未找到则push
      selectGoodsList.push(goods)
    }

    this.setState({
      selectGoodsList,
    })
  }

  handleSubmit = () => {
    if (!this.state.selectGoodsList.length) {
      normal.warning('请先选择需要的背调选项')
      return
    }
    normal.success('选择成功')
    this.props.onSubmit(this.state.selectGoodsList)
  }

  componentWillMount() {
    this.init()
  }

  render () {
    const { isLoadingGoods, order } = this.props;
    const { goods } = order
    const { selectGoodsList } = this.state

    let composePrice = 0
    let realPrice = 0

    selectGoodsList.forEach(goods => {
      composePrice += goods.originalprice
      realPrice += goods.price
    })
    
    return (
      <div className="select-freedom-wrap">
        <Spin spinning={isLoadingGoods}>
          <Paragraph className="goods-tip">
            可根据公司实际需求选择合适的背调选项：一项九折，俩项八折，三项以上七折组合优惠
          </Paragraph>

          {/* 商品列表 */}
          <div className="goods-wrap">
            {goods.map(group => (
              <div className="goods-group-wrap">
                <Title level={4} className="goods-group-title">{group.title}</Title>
                <div className="goods-wrap">
                  {group.goods.map(goods => {
                    return (
                      <GoodCard
                        key={goods.id}
                        explain={goods.explain}
                        title={goods.title}
                        price={goods.price}
                        isSelected={_.findIndex(selectGoodsList, goods) !== -1}
                        onClick={() => { this.handleSelectGoods(goods) }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          
          
          {!!this.state.selectGoodsList.length && (
            <>
              {/* 价格计算 */}
              <div className="price-result-wrap">
                <div className="compose-price-wrap">
                  <div className="price-title">
                    组合价格
                  </div>
                  <div className="compose-price">
                    ￥{composePrice.toFixed(2)}
                  </div>
                </div>

                <div className="real-price-wrap">
                  <div className="price-title">
                    优惠价格
                  </div>
                  <div className="real-price">
                    ￥{realPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* 提交按钮 */}
              <div className="operation-wrap">
                <div className="btn-submit-freedom" onClick={this.handleSubmit}>
                  确认提交
                </div>
              </div>
            </>
          )}

         
        </Spin>
      </div>
    )
  }
}
