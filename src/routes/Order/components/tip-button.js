import React, { Component } from 'react';
import T from 'prop-types'

export default class TipButton extends Component {
  static propTypes = {
    children: T.any,
    onClick: T.func,
  }

  render() {
    return <div className="tip-button" onClick={this.props.onClick}>{this.props.children}</div>
  }
}
