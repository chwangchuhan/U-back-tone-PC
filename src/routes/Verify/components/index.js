import React, { Component } from 'react';
import { connect, router } from 'dva';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Spin, Form } from 'antd';
// import logoImg from 'assets/images/logo1.png';
import './index.less';
const { Link } = router;
const { Content } = Layout;
const FormItem = Form.Item;

@connect(({ login, loading }) => ({
  
}))
export default class Verify extends Component {

  render() {
    const { loading } = this.props;

    return (
      <Layout className="full-layout login-page">
        <Content>
          <Spin tip="登录中..." spinning={!!loading}>
            我就是个认证页面
          </Spin>
        </Content>
      </Layout>
    );
  }
}
