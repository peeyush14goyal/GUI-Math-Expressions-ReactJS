import React, { Component } from "react";

class Expr extends Component {
  render() {
    return (
      <div>
        <span className="display_info">{this.props.checkCal()}</span>
      </div>
    );
  }
}

export default Expr;
