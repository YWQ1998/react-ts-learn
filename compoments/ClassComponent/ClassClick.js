import React, { Component } from 'react';

class ClassClick extends Component {
  state = {
    count: 0,
  };

  handleAdd = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('回调函数', this.state.count);
    //   }
    // );

    // console.log('点击按钮修改数据count', this.state.count);
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log('回调函数', this.state.count);
      }
    );
    console.log('点击按钮修改数据count', this.state.count);
  };

  handleAdd5 = () => {
    this.handleAdd();
    this.handleAdd();
    this.handleAdd();
    this.handleAdd();
    this.handleAdd();
  };

  render() {
    return (
      <div>
        <p>计数：{this.state.count}</p>
        <button onClick={() => this.handleAdd5()}>计数按钮</button>
      </div>
    );
  }
}

export default ClassClick;
