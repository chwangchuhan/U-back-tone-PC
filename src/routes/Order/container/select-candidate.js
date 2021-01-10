import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'dva';
import { PlusOutlined } from '@ant-design/icons';
import { normal } from 'components/Notification';
import _ from 'lodash'

import CandidateCard from '../components/candidate-card'
import ModalAddCandidate from '../components/candidate-add-modal'

/**
 * 选择候选人
 */
@connect(({order}) => ({

}))
export default class SelectCandidate extends Component {
  static propTypes = {
    candidateUsers: T.array.isRequired,
    onSubmit: T.func.isRequired, // 提交候选人 
  }

  static defaultProps = {
    candidateUsers: [],
  }

  state = {
    candidateUsers: this.props.candidateUsers,
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.candidateUsers)
  }

  handleAddCandidateUser = data => {
    const { candidateUsers } = this.state
    const nameList = candidateUsers.map(user => user.name)

    if (nameList.includes(data.name)) {
      normal.warning('已存在该候选人，请重新提交')
      return false
    }

    candidateUsers.push(data)
    this.setState({ candidateUsers })
    normal.success('添加成功')
    return true
  }

  // 预览背调模板
  handlePreview = user => {
    console.log(user)
    alert('预览啦')
  }

  // 删除候选人
  handleDelete = user => {
    const { candidateUsers } = this.state

    // 找到选中项则移除
    if (_.findIndex(candidateUsers, user) !== -1) {
      _.remove(candidateUsers, item => item.name === user.name)
      this.setState({
        candidateUsers,
      })
      normal.success('删除成功')
    }
  }

  render () {
    const { candidateUsers } = this.state
    
    return (
      <div className="select-candidate-wrap">
        {candidateUsers.map(user => {
          return <CandidateCard data={user} onPreview={() => {this.handlePreview(user)}} onDelete={() => {this.handleDelete(user)}} />
        })}

        <ModalAddCandidate onSubmit={this.handleAddCandidateUser}>
          <div className="btn-add-candidate-user">
            <div className="add-user-content">
              <div className="add-icon">
                <PlusOutlined />
              </div>
              <div className="add-user-label">添加候选人</div>
            </div>
          </div> 
        </ModalAddCandidate>

        {/* 提交按钮 */}
        {!!candidateUsers.length && (
          <div className="operation-wrap">
            <div className="btn-submit" onClick={this.handleSubmit}>
              确认提交
            </div>
          </div>
        )}
      </div>
    )
  }
}
