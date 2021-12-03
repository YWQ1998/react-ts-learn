import React, { Component } from 'react';

class ContitionalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '张三',
      isLoginFlage: true,
    };

    this.handleLoginState = this.handleLoginState.bind(this);
  }

  handleLoginState() {
    this.setState({ isLoginFlage: !this.state.isLoginFlage });
  }
  render() {
    // 条件判断方式一 if-else：
    // if (this.state.isLoginFlage) {
    //   return (
    //     <div>
    //       <h3>欢迎 {this.state.user} 登录</h3>
    //       <button onClick={this.handleLoginState}>注销</button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h3>欢迎 游客 访问</h3>
    //       <button onClick={this.handleLoginState}>登录</button>
    //     </div>
    //   );
    // }

    // 条件判断方式二 if-else + JSX：
    // let elements;
    // if (this.state.isLoginFlage) {
    //   elements = (
    //     <div>
    //       <h3>欢迎 {this.state.user} 登录</h3>
    //       <button onClick={this.handleLoginState}>注销</button>
    //     </div>
    //   );
    // } else {
    //   elements = (
    // <div>
    //   <h3>欢迎 游客 访问</h3>
    //   <button onClick={this.handleLoginState}>登录</button>
    // </div>
    //   );
    // }

    // return <div>{elements}</div>;

    // 条件判断方式三 三元运算符：
    // return this.state.isLoginFlage ? (
    //   <div>
    //     <h3>欢迎 {this.state.user} 登录</h3>
    //     <button onClick={this.handleLoginState}>注销</button>
    //   </div>
    // ) : (
    //   <div>
    //     <h3>欢迎 游客 访问</h3>
    //     <button onClick={this.handleLoginState}>登录</button>
    //   </div>
    // );

    // 条件判断方式四 短路（截断）：
    return (
      this.state.isLoginFlage && (
        <div>
          <h3>欢迎 {this.state.user} 登录</h3>
          <button onClick={this.handleLoginState}>注销</button>
        </div>
      )
    );
  }
}
export default ContitionalComponent;
