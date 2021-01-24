import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Spin, Space, Typography, Tag, Row, Input, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import moment from 'moment'

import './index.less';

const { Title, Link  } = Typography

// 订单列表
@connect(({ reportInfo, loading }) => ({
  reportInfo,
  isLoadingReportInfo: loading.effects['reportInfo/getReportList'],
}))
export default class ReportList extends Component {
  state = {}

  queryReportList = ({ name = "" } = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'reportInfo/getReportList',
      payload: { name }
    });
  }

  componentWillMount() {
    this.queryReportList()
  }

  handleSearch = key => {
    this.queryReportList({ name: key })
  }

  render() {
    const { isLoadingReportInfo, reportInfo } = this.props
    const { list } = reportInfo


    return (
      <div className="report-info-wrap">
        <Spin spinning={isLoadingReportInfo}>
          <Row style={{ marginBottom: '20px' }} justify="space-between">
            <Title level={4}>id是：{this.props.match.params.id}</Title>
          </Row>
        </Spin>
      </div>
    );
  }
}
