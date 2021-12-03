import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
// import { Geet } from './compoments/FunctionComponent';
// import { WelCome } from './compoments/props/baseFunction';
// import WelCome from './compoments/ClassComponent';
// import FunctionClick from './compoments/funComponent/FunctionClick';
// import ClassClick from './compoments/ClassComponent/ClassClick';
// import StateFunction from './compoments/state/baseFunction';
// import ThisEvent from './compoments/ClassComponent/01_thisEvent';
// import FatherComponent from './compoments/propsTransfre/fatherComponent';
import ContitionalComponent from './compoments/ClassComponent/02_conditional';
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
        {/* <Geet /> */}
        {/* <WelCome name="张三" /> */}
        {/* <ClassClick /> */}
        {/* <StateFunction /> */}
        {/* <ThisEvent /> */}
        {/* <FatherComponent /> */}
        <ContitionalComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
