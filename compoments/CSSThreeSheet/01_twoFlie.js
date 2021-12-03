import React, { Component } from 'react';
import './sheetStyle.css';

class MessageComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const primaryFlage = this.props.primary ? 'primary' : '';
    return <h1 className={`${primaryFlage} font-xl`}>消息</h1>;
  }
}

export default MessageComponent;
