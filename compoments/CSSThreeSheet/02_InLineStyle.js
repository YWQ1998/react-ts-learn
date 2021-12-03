import React, { Component } from 'react';
class InLineStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetStyle: {
        color: 'red',
        fontSize: '25px',
      },
    };
  }
  render() {
    return (
      <div>
        <div style={this.state.sheetStyle}>行内样式</div>
        <h2 className="error">失败</h2>
      </div>
    );
  }
}

export default InLineStyle;
