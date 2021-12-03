import React from 'react';

function Child(props) {
  console.log('接受父组件的传值', props);
  const childMessage = 'child';
  return (
    <div>
      <button
        onClick={() => {
          props.fatherProps(childMessage);
        }}
      >
        子组件传值按钮
      </button>
    </div>
  );
}
export default Child;
