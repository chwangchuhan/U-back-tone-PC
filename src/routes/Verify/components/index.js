import React, { Component } from 'react';
import { connect, router } from 'dva';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Spin, Form, Steps, Button, Result, Input, Upload, Space } from 'antd';
import { ClockCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import imgVerifyBg from 'assets/images/bg/verify-upload-bg.png';
import './index.less';
const { Link } = router;
const { Content } = Layout;
const FormItem = Form.Item;

const { Step } = Steps;

const layout   = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
@connect(({ verify, loading }) => ({
  verify,
  isLoading: loading.effects['verify/getVerifyInfo']
}))
export default class Verify extends Component {

  init = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'verify/getVerifyInfo',
      payload: {}
    });
  }

  goHome = () => {
    this.props.history.replace('/')
  }

  goReUpload = () => {
    this.props.dispatch({
      type: 'verify/setVerifyInfo',
      payload: { step: 0 }
    })
  }

  handleSubmit = form => {
    console.log(form)
    const { dispatch } = this.props;
    
    dispatch({
      type: 'verify/uoloadVerify',
      payload: {}
    });
  }

  componentWillMount() {
    this.init()
  }

  render() {
    const { isLoading, verify } = this.props;
    const { step } = verify

    return (
      <div className="register-verify-wrap">
        <Spin tip="加载中..." spinning={!!isLoading}>
          <div className="verify-step">
            <Steps current={step}>
              <Step title="企业认证" description="请先完整输入认证信息" />
              <Step title="认证审核" description="审核中" />
              <Step title="审核结果" description="审核完成" />
            </Steps>
          </div>

          <div className="verify-info-wrap">
            {step === 0 && (
              <Form {...layout} onFinish={this.handleSubmit} className="verify-upload-form">
                <div className="upload-info-wrap">
                 <FormItem label="企业全称" name="businessName" rules={[{ required: true, message: '请输入企业全称' }]}>
                  <Input
                    size="large"
                    // prefix={<LockOutlined />}
                    type="password"
                    placeholder="请输入企业全称"
                  />
                  </FormItem>
                  <FormItem name="businessCode" label="组织机构代码" rules={[{ required: true, message: '请输入组织机构代码' }]}>
                    <Input
                      size="large"
                      // prefix={<UserOutlined />}
                      placeholder="请输入组织机构代码"
                    />
                  </FormItem>
                </div>
                
                <div className="upload-img-wrap">
                  <div className="upload-tip">上传营业执照</div>
                  <Upload className="upload-btn">
                    <img src={imgVerifyBg}  alt="上传营业执照" />
                  </Upload>
                  <div className="upload-tip">说明：请上传营业执照复印件并加盖公章</div>
                </div>
                <div className="btn-operation-wrap">
                  <Space size="large">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                        确认提交
                    </Button>
                    <Button htmlType="button">
                      暂不认证
                    </Button>
                  </Space>
                </div>
                
              </Form>
            )}
            {step === 1 && (
                <Result
                  status="info"
                  title="审核中，请耐心等待"
                  icon={<ClockCircleFilled />}
                  subTitle="已提交 ..."
                  extra={[
                    <Button key="buy" onClick={this.init}>刷新结果</Button>,
                  ]}
                />
              )
            }
            {step === 2 && (
                <Result
                  status="success"
                  title="审核完成"
                  // icon={<ClockCircleFilled />}
                  subTitle="请尽情体验U背调"
                  extra={[
                    <Button key="buy" onClick={this.goHome}>立即进入主页</Button>,
                  ]}
                />
              )
            }
            {step === 3 && (
                <Result
                  status="error"
                  title="审核不通过"
                  icon={<ExclamationCircleFilled />}
                  subTitle="请仔细检查公司名称和注册机构代码是否匹配"
                  extra={[
                    <Button key="buy" onClick={this.goReUpload}>重新申请</Button>,
                  ]}
                />
              )
            }
            
          </div>
        </Spin>
      </div>
    );
  }
}
