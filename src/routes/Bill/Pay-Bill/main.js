import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'dva';
import { Table, Spin, Space, Typography, Radio, Row, Input, Col } from 'antd';
import { MoneyCollectFilled } from '@ant-design/icons'
import moment from 'moment'

import './index.less';

const { Title, Link  } = Typography

// 订单列表
@connect(({ billList, loading }) => ({
  billList,
  isLoadingMonthList: loading.effects['billList/getMonthBillList'],
  isLoadingList: loading.effects['billList/getBillList'],
}))
export default class BillMonthList extends Component {
  state = {
    step: 0,
    isMonthBill: window.location.href.includes('isMonth=1'),
    isAgreeBill: false,
  }

  columns = [
    {
      width: 50,
      render: name => (
        <Space>
          <MoneyCollectFilled style={{ fontSize: '20px', color: '#fd9b50' }} />
        </Space>
      )
    },
    {
      title: '日期',
      dataIndex: 'time',
      key: 'time',
      render: time => moment(time).format('YYYY-MM-DD')
    },
    {
      title: '候选人姓名',
      dataIndex: 'name',
      key: 'name',
      render: name => (
        <Space>
          {name}
        </Space>
      )
    },
    {
      title: '订单类型',
      dataIndex: 'typeStr',
      key: 'typeStr',
    },
    {
      title: '费用标准（元）',
      width: 200,
      dataIndex: 'price',
      key: 'price',
      render: price => price.toFixed(2)
    },
  ]

  init = ({ name = "" } = {}) => {
    const { dispatch } = this.props;
    if (this.state.isMonthBill) {
      dispatch({
        type: 'billList/getMonthBillList',
      });
    } else {
      dispatch({
        type: 'billList/getBillList',
      });
    }
    
  }

  componentWillMount() {
    this.init()
  }

  handleAgreeBillChange = e => {
    this.setState({
      isAgreeBill: e.target.value,
    })
  }

  render() {
    const { isLoadingList, billList, isLoadingMonthList } = this.props
    const { step, isAgreeBill, isMonthBill } = this.state
    const {  list } = billList

    return (
      <div className="pay-bill-wrap">
        <Spin spinning={isLoadingList || isLoadingMonthList}>
          <Row style={{ marginBottom: '20px' }} justify="space-between">
            <Title level={4}>{isMonthBill ? '本月账单' : '待付账单'}</Title>
          </Row>
          {step === 0 && (
            <div className='pay-bill-list-wrap'>
              <Table
                columns={this.columns}
                dataSource={list}
                pagination={false}
                bordered
              />
              <Row className='pay-bill-list-operation-wrap' align="middle">
                <Col flex="auto">
                  <Radio value={isAgreeBill} onChange={this.handleAgreeBillChange}>以上账单明细确认无误</Radio>
                </Col>
                <Col className='price-submi-wrap'>
                  <div className='total-price'>总金额：￥{_.sumBy(list, item => item.price).toFixed(2)}</div>
                  <div className='btn-go-pay'>确认支付</div>
                </Col>
              </Row>
            </div>
          )}
        </Spin>
      </div>
    );
  }
}
