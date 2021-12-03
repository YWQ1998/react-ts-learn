import React, { Component } from 'react';
import Child from './childComponent';
class FatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'father',
    };
    this.handleAlertMessage = this.handleAlertMessage.bind(this);
  }

  handleAlertMessage(value) {
    console.log('父组件函数的参数', value);
    alert(`父组件的变量 ${this.state.message} 子组件的变量: ${value}`);
  }

  render() {
    return (
      <div>
        <h1>父组件</h1>
        <Child fatherProps={this.handleAlertMessage} />
      </div>
    );
  }
}
export default FatherComponent;
