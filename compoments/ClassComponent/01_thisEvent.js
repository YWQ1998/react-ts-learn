import React, { Component } from 'react';

class ThisEvent extends Component {
  constructor() {
    super();
    this.state = {
      message: '事件绑定问题',
    };
    // 方法三
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }
  handleChangeMessage() {
    console.log('点击事件', this);
  }

  handleChangeMessage2 = () => {
    console.log('点击事件', this);
  };

  render() {
    return (
      <div>
        <h1>类组件中事件绑定问题的四种解决办法</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleChangeMessage.bind(this)}>
          解决方法一
        </button>
        <button
          onClick={() => {
            this.handleChangeMessage();
          }}
        >
          解决方法二
        </button>
        <button onClick={this.handleChangeMessage}>解决方法三</button>
        <button onClick={this.handleChangeMessage2}>解决方法四</button>
      </div>
    );
  }
}
export default ThisEvent;
