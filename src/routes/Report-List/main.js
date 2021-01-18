import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Spin, Space, Typography, Tag, Row, Input, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import moment from 'moment'

import './index.less';

const { Title, Link  } = Typography

// 订单列表
@connect(({ report, loading }) => ({
  report,
  isLoadingReport: loading.effects['report/getReportList'],
}))
export default class ReportList extends Component {
  state = {}

  queryReportList = ({ name = "" } = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'report/getReportList',
      payload: { name }
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
      title: '生成时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      render: time => moment(time).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 120,
      render: (v, rowData) => <Link onClick={() => {
        console.log(rowData)
        alert(rowData.name)
      }}>查看報告</Link>
    },
  ]

  componentWillMount() {
    this.queryReportList()
  }

  handleSearch = key => {
    this.queryReportList({ name: key })
  }

  render() {
    const { isLoadingReport, report } = this.props;
    const { list } = report

    return (
      <div className="report-list-wrap">
        <Spin spinning={isLoadingReport}>
          <Row style={{ marginBottom: '20px' }} justify="space-between">
            <Title level={4}>报告列表</Title>
            <Col span={8}>
              <Input.Search placeholder="input search text" onSearch={this.handleSearch} enterButton loading={isLoadingReport} />
            </Col>
          </Row>
          
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
