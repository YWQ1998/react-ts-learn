import React from 'react';

export const WelCome = (props) => {
  console.log('组件接收到的参数：props', props);
  return (
    <div>
      <h1>你好： {props.name}！</h1>
    </div>
  );
};
