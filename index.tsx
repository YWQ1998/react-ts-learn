import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Geet } from './compoments/FunctionComponent';
// import { WelCome } from './compoments/props/baseFunction';
import WelCome from './compoments/ClassComponent';
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Geet />
        <WelCome name="张三" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
