import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import { connect } from 'dva';
import { Spin, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { normal } from 'components/Notification';
import _ from 'lodash'

import CandidateCard from '../components/candidate-card'

const { Title, Paragraph, Text, Link } = Typography;

/**
 * 选择候选人
 */
@connect(({order}) => ({

}))
export default class SelectCandidate extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired, // 提交候选人 
  }

  static defaultProps = {}

  state = {
    candidateUsers: [{ name: '帅猫', phone: 17826855166, gender: '男', email: 'chwangchuhan@163.com' }],
  }

  handleSelectGoods(goods) {
    const { selectGoodsList } = this.state

    // 找到选中项则移除
    if (_.findIndex(selectGoodsList, goods) !== -1) {
      _.remove(selectGoodsList, item => item.id === goods.id)
    } else {
      // 未找到则push
      selectGoodsList.push(goods)
    }

    this.setState({
      selectGoodsList,
    })
  }

  handleSubmit = () => {
    if (!this.state.selectGoodsList.length) {
      normal.warning('请先选择需要的背调选项')
      return
    }
    normal.success('选择成功')
    this.props.onSubmit(this.state.selectGoodsList)
  }

  render () {
    const { candidateUsers } = this.state
    
    return (
      <div className="select-candidate-wrap">
        {candidateUsers.map(user => {
          return <CandidateCard data={user} />
        })}

        <div className="btn-add-candidate-user">
          <div className="add-user-content">
            <div className="add-icon">
              <PlusOutlined />
            </div>
            <div className="add-user-label">添加候选人</div>
          </div>
        </div>
      </div>
    )
  }
}
