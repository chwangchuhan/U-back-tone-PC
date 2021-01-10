import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 17 },
};

// 候选人基础信息卡片
export default class CandidateAddModal extends Component {
  static propTypes = {
    children: T.any.isRequired,
    onSubmit: T.func.isRequired,
  }

  static defaultProps = {}

  state = {
    isShow: false,
  }

  formRef = React.createRef()

  handleOk = () => {
    this.formRef.current && this.formRef.current.submit()
  }

  handleShow = () => {
    this.setState({ isShow: true })
  }

  handleClose = () => {
    this.setState({ isShow: false })
  }

  handleSubmit = data => {
    if (this.props.onSubmit(data)) {
      this.setState({ isShow: false })
      this.formRef.current.resetFields()
    }
    
  }

  render () {
    return (
      <>
        <span onClick={this.handleShow}>
          {this.props.children}
        </span>
        <Modal title="添加候选人"
          visible={this.state.isShow}
          onOk={this.handleOk}
          onCancel={this.handleClose}
        >
          <Form {...layout} ref={this.formRef} onFinish={this.handleSubmit}>
            <FormItem name="name" label="姓名" rules={[{ required: true, message: '请输入候选人姓名' }]}>
              <Input
                placeholder="请输入候选人姓名"
              />
            </FormItem>
            <FormItem name="phone" label="手机" rules={[{ required: true, message: '请输入候选人手机' }]}>
              <Input
                placeholder="请输入候选人手机"
              />
            </FormItem>
            <FormItem name="gender" label="姓别" rules={[{ required: true, message: '请输入候选人性别' }]}>
              <Input
                placeholder="请输入候选人性别"
              />
            </FormItem>
            <FormItem name="email" label="E-mail" rules={[{ required: true, message: '请输入候选人邮箱' }]}>
              <Input
                placeholder="请输入候选人邮箱"
              />
            </FormItem>
          </Form>
        </Modal>
      </>
      
      
    )
  }
}
