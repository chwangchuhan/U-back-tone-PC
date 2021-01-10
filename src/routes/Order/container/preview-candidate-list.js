import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'dva';
import { Table, Typography} from 'antd'

/**
 * 候选人预览列表
 */
@connect(({order}) => ({

}))
export default class PreviewCandidateList extends Component {
  static propTypes = {
    candidateUsers: T.array.isRequired,
    onSubmit: T.func.isRequired, // 提交候选人 
    onGoAdd: T.func.isRequired, // 重新提交
  }

  handlePreview = user => {
    alert('预览了' + user.name)
  }

  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      dataIndex: 'operation',
      key: 'operation',
      render: (v, rowData) => {
        return (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Typography.Link onClick={() => {this.handlePreview(rowData)}}>预览</Typography.Link>
        )
      }
    }
  ]

  render () {
    const { candidateUsers } = this.props
    
    return (
      <div className="preview-candidate-list-wrap">
        <div className="preview-candidate-list">
          {/* {candidateUsers.map(user => {
            return (
              <div className="preview-candidate-item" onClick={() => {this.handlePreview(user)}}>
                候选人{user.name}背调模板预览
              </div>
            )
          })} */}
          <Table
            // rowSelection={{
            //   type: selectionType,
            //   ...rowSelection,
            // }}
            columns={this.columns}
            dataSource={candidateUsers}
            pagination={false}
            bordered
          />
        </div>

        {/* 提交按钮 */}
        {!!candidateUsers.length && (
          <div className="operation-wrap">
            <div className="btn-go-add" onClick={this.props.onGoAdd}>
              继续添加
            </div>
            <div className="btn-submit" onClick={this.props.onSubmit}>
              确认提交
            </div>
          </div>
        )}
      </div>
    )
  }
}
