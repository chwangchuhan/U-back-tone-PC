import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'dva';
import { Table, Spin, Space, Typography, DatePicker, Row, Button, Col } from 'antd';
import { MoneyCollectFilled } from '@ant-design/icons'
import moment from 'moment'

import './index.less';

const { Title  } = Typography
const { RangePicker } = DatePicker

// 订单列表
@connect(({ historyBillList, loading }) => ({
  historyBillList,
  isLoadingList: loading.effects['historyBillList/getHistoryBillList'],
}))
export default class BillMonthList extends Component {
  state = {
    dates: null,
  }

  columns = [
    {
      width: 50,
      render: name => (
        <Space>
          <MoneyCollectFilled style={{ fontSize: '20px', color: '#09b144' }} />
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

  init = () => {
    const { dispatch } = this.props
    const { dates } = this.state
    dispatch({
      type: 'historyBillList/getHistoryBillList',
      payload: { dates },
    })
  }

  componentWillMount() {
    this.init()
  }

  handleDateChange = v => {
    if (v && v.length === 2) {
      this.setState({
        dates: [v[0].valueOf(), v[1].valueOf()]
      })
    }
  }

  render() {
    const { isLoadingList, historyBillList } = this.props
    const {  list } = historyBillList

    return (
      <div className="pay-bill-wrap">
        <Spin spinning={isLoadingList}>
          <Row style={{ marginBottom: '20px' }} justify="space-between">
            <Col flex='auto'>
              <Title level={4}>历史账单</Title>
            </Col>
            
            <Col>
              <Space>
                <RangePicker allowClear onChange={this.handleDateChange} />
                <Button type="primary" onClick={this.init}>查询</Button>
              </Space>
              
            </Col>
          </Row>
          <div className='pay-bill-list-wrap'>
            <Table
              columns={this.columns}
              dataSource={list}
              pagination={false}
              bordered
            />
          </div>
        </Spin>
      </div>
    );
  }
}
