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
// import ContitionalComponent from './compoments/ClassComponent/02_conditional';
// import MessageComponent from './compoments/CSSThreeSheet/01_twoFlie';
import InLineStyle from './compoments/CSSThreeSheet/02_InLineStyle';
import './CSS/appStyle.css';
import Style from './CSS/app.mould.style.css';
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
    console.log(Style);
    return (
      <div>
        <h2 className="error">失败</h2>
        <h2 className={Style.success}>成功</h2>
        {/* <Geet /> */}
        {/* <WelCome name="张三" /> */}
        {/* <ClassClick /> */}
        {/* <StateFunction /> */}
        {/* <ThisEvent /> */}
        {/* <FatherComponent /> */}
        {/* <ContitionalComponent /> */}
        {/* <MessageComponent primary={true} /> */}
        <InLineStyle />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
