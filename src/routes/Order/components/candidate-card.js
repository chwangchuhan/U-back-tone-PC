import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import { Modal } from 'antd'

const infoMap = {
  name: '姓名',
  phone: '手机',
  gender: '性别',
  email: 'E-mail',
}

// 候选人基础信息卡片
export default class CandidateCards extends Component {
  static propTypes = {
    data: T.shape({
      name: T.string,
      phone: T.string,
      gender: T.string,
      email: T.string,
    }).isRequired,
    onReview: T.func.isRequired,
    onDelete: T.func.isRequired,
  }

  static defaultProps = {
    isSelected: false,
  }
  render () {
    return (
      <div className="candidate-card-wrap">
        <div className="candidate-title-wrap">
          候选人基础信息
        </div>
        <div className="candidate-content-wrap">
          {Object.keys(infoMap).map(key => {
            const label = infoMap[key]
            return (
              <div className="candidate-content-item" key={key}>
                <div className="candidate-content-item-label">
                  {label}：
                </div>
                <div className="candidate-content-item-value">
                  {this.props.data[key] || ""}
                </div>
              </div>
            )
          })}
        </div>
        <div className="operation-wrap">
          <div className="btn-review-template">预览背调模板</div>
          <div className="btn-delete">删除候选人</div>
        </div>
      </div>
    )
  }
}
