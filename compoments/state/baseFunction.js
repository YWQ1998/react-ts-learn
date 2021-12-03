import React, { Component } from 'react';

class StateFunction extends Component {
  constructor() {
    super();
    this.state = {
      message: 'state 类组件状态管理',
    };
  }

  handleChangeMessage = () => {
    this.setState({
      message: '更改state 类组件状态管理',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleChangeMessage}>变更状态</button>
      </div>
    );
  }
}
export default StateFunction;
