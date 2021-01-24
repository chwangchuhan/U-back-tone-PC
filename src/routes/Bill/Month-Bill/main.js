import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'dva';
import { Table, Spin, Space, Typography, Tag, Row, Input, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import moment from 'moment'

import './index.less';

const { Title, Link  } = Typography

// 订单列表
@connect(({ billMonthList, loading }) => ({
  billMonthList,
  isLoadingList: loading.effects['billMonthList/getMonthBillList'],
}))
export default class BillMonthList extends Component {
  state = {
    step: 0,

  }

  queryMonthBillList = ({ name = "" } = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'billMonthList/getMonthBillList',
    });
  }

  componentWillMount() {
    this.queryMonthBillList()
  }

  handleSearch = key => {
    this.queryMonthBillList()
  }

  render() {
    const { isLoadingList, billMonthList, history } = this.props
    const { step } = this.state
    const {  list } = billMonthList

    return (
      <div className="bill-month-wrap">
        <Spin spinning={isLoadingList}>
          {/* <Row style={{ marginBottom: '20px' }} justify="space-between">
            <Title level={4}>id是：{this.props.match.params.id}</Title>
          </Row> */}
          {step === 0 && (
            <div className='bill-month-total-wrap'>
              <div className="total-label">
                本月账单
              </div>
              <div className="total-price-wrap">
                {_.sumBy(list, item => item.price).toFixed(2)}
              </div>
              <div className="btn-check-info" onClick={() => {
                history.push('pay-bill?isMonth=1')
              }}>
                查看详情
              </div>
            </div>
          )}
        </Spin>
      </div>
    );
  }
}
