import React, { Component } from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import { Modal } from 'antd'
import GoodsCardIcon from 'assets/images/order/goods-card-icon.png';
import GoodsCardIconSelect from 'assets/images/order/goods-card-icon-select.png';

// 商品卡片
export default class GoodCards extends Component {
  static propTypes = {
    explain: T.array,
    title: T.string.isRequired,
    isSelected: T.bool,
    price: T.any,
    type: T.oneOf([0, 1]),  // 0 带身份图标，1 只显示文字
    onClick: T.func,
  }

  static defaultProps = {
    isSelected: false,
  }

  handleShowExplain = e => {
    e.stopPropagation()
    e.preventDefault()
    Modal.info({
      title: null,
      icon: null,
      className: 'goods-card-modal',
      maskClosable: true,
      content: (
        <div className="goods-card-modal-content-wrap">
          <div className="goods-card-modal-title">{this.props.title}</div>
          <div className="goods-card-modal-explain-wrap">
            {this.props.explain.map((item, index) => {
              return (
                <div className="goods-card-modal-explain-item" key={index}>{item}</div>
              )
            })}
          </div>
        </div>
      ),
      onOk() {},
    });
  }

  render () {
    return (
      <div className={classnames("goods-card-wrap", {
        'is-selected': this.props.isSelected,
      })} onClick={this.props.onClick}>
        <div className="goods-card-content">
          <div className="goods-header-wrap">
            <div className="goods-icon-wrap">
              <img src={this.props.isSelected ? GoodsCardIconSelect : GoodsCardIcon}  alt="上传营业执照" />
            </div>
            {!!this.props.explain.length && <div className="goods-btn" onClick={this.handleShowExplain}>?</div>}
          </div>
          <div className="goods-title">
            {this.props.title}
          </div>
          <div className="goods-price">
          ￥{this.props.price.toFixed(2)}
          </div>
        </div>
      </div>
    )
  }
}
