import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'dva';
import { Spin, Typography, Table } from 'antd'
import { normal } from 'components/Notification';
import _ from 'lodash'
import TipButton from '../components/tip-button'


const { Text, Title } = Typography;
const columns = [
  {
    title: '背景调查项目',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    render: price => price > 0 ? price : '免费'
  },
]

/**
 * 选择商品套餐
 */
@connect(({ order, loading }) => ({
  // order,
  // isLoadingGoods: loading.effects['order/getOrderGoods'],
}))
export default class SelectFreedom extends Component {
  static propTypes = {
    goodsMeals: T.array.isRequired,
    onSubmit: T.func.isRequired, // 提交商品套餐选择
  }

  static defaultProps = {}

  state = {
    selectMeals: null,
  }


  handleSetMeal = goodsMeal => {
    this.setState({
      selectMeals: goodsMeal,
    })
  }

  handleReset = () => {
    this.setState({
      selectMeals: null,
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.selectMeals)
  }

  render () {
    const { goodsMeals } = this.props
    const { selectMeals } = this.state

    

    if (!selectMeals || !selectMeals.items) {
      return (
        <div className="select-type" onClick={this.handleGoGoods}>
          {goodsMeals.map(item => {
            return (
              <TipButton
                key={item.id}
                onClick={() => { this.handleSetMeal(item) }}
              >
                {item.label}
              </TipButton>
            )
          })}
        </div>
      )
    }

    return (
      <div className="select-goods-meals-submit-wrap">
        <Title level={3} style={{ textAlign: 'center' }}>{selectMeals.label}</Title>
        
        <div className="report-time-wrap">
          出报告时长：{selectMeals.reportTime}
        </div>

        {/* 背调项目选择说明 */}
        <div className="item-select-desc">
          <div className="desc-title">背调项目选择说明</div>
          <div className="desc-item">
            1.企业可以根据实际需要自行选择背调的项目
          </div>
          <div className="desc-item">
            2.套餐定制：U背调可以结合企业的实际需要量身定制套餐中的背调项目
          </div>
          <div className="desc-item">
            3.以上套餐可以根据企业实际需要进行更换项目
          </div>
        </div>

        <Table
          // rowSelection={{
          //   type: selectionType,
          //   ...rowSelection,
          // }}
          className='meal-items-table'
          columns={columns}
          dataSource={selectMeals.items}
          pagination={false}
        />

        {/* 价格计算 */}
        <div className="price-result-wrap">
          <div className="compose-price-wrap">
            <div className="price-title">
              套餐原价
            </div>
            <div className="compose-price">
              ￥{selectMeals.originPrice.toFixed(2)}
            </div>
          </div>

          <div className="real-price-wrap">
            <div className="price-title">
              优惠价格
            </div>
            <div className="real-price">
              ￥{selectMeals.price.toFixed(2)}
            </div>
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="operation-wrap">
          <div className="btn-reset" onClick={this.handleReset}>
            重新选择
          </div>
          <div className="btn-submit-freedom" onClick={this.handleSubmit}>
            确认提交
          </div>
        </div>

        
      </div>
    )
  }
}
