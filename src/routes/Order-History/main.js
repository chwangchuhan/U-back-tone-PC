import React, { Component } from 'react';
import T from 'prop-types'
import { connect, router } from 'dva';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Table, Spin, Space, Typography, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import moment from 'moment'

import './index.less';

const { Title, Text  } = Typography

const ORDER_STATUS_MAP = {
  0: '背调函待发送',
  1: '候选人待确认',
  2: '背调人待确认',
  3: '背调已完成',
}

@connect(({ orderHistory, loading }) => ({
  orderHistory,
  isLoadingOrders: loading.effects['orderHistory/getOrderHistory'],
}))
export default class OrderHistory extends Component {
  state = {
    // 自由选中的商品
    freeSelectsGoods: [],
    candidateList: [{ name: '帅猫', phone: 17826855166, gender: '男', email: 'chwangchuhan@163.com' }],
    currentMeal: null, // 当前选中的套餐
  }

  init = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'orderHistory/getOrderHistory',
      payload: {}
    });
  }

  columns = [
    {
      title: '候选人姓名',
      dataIndex: 'name',
      key: 'name',
      render: name => (
        <Space>
          <UserOutlined />
          {name}
        </Space>
      )
    },
    {
      title: '订单类型',
      dataIndex: 'typeStr',
      key: 'typeStr',
      render: type => <Tag color="green">{type}</Tag>
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      render: time => moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        return (
          <Text type={status > 2 ? 'success' : 'warning'}>
            {ORDER_STATUS_MAP[status] || '暂无'}
          </Text>
          
        )
      }
    },
  ]

  componentWillMount() {
    this.init()
  }

  render() {
    const { isLoadingOrders, orderHistory } = this.props;
    const { list } = orderHistory
    console.log(list)

    return (
      <div className="order-history-wrap">
        <Spin spinning={isLoadingOrders}>
          <Title level={4} style={{ marginBottom: '20px' }}>历史订单</Title>
          <Table
            columns={this.columns}
            dataSource={list}
            pagination={false}
            bordered
          />
        </Spin>
      </div>
    );
  }
}
