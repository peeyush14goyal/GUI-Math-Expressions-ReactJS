import React, { Component } from "react";
import "./App.css";
import Digit from "./digits";
import Expr from "./cal";

class App extends Component {
  state = {
    digits_d: [
      { id: 1, value: 5 },
      { id: 2, value: 3 },
      { id: 3, value: 6 },
      { id: 4, value: 28 },
    ],
    expVal: false,
  };

  handleIncrement = (val) => {
    const digits_d = [...this.state.digits_d];
    const val1 = digits_d.indexOf(val);
    digits_d[val1] = { ...val };
    digits_d[val1].value++;
    this.setState({ digits_d });
  };

  handleDecrement = (val) => {
    const digits_d = [...this.state.digits_d];
    const val1 = digits_d.indexOf(val);
    digits_d[val1] = { ...val };
    digits_d[val1].value--;
    this.setState({ digits_d });
  };

  checkCal1 = () => {
    const sum1 =
      this.state.digits_d[0].value * this.state.digits_d[1].value -
      this.state.digits_d[2].value;
    if (sum1 === this.state.digits_d[3].value) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="App displayExp">
        <Digit
          digits_d={this.state.digits_d}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          checkVal={this.checkCal1}
        />
        <div className="equalSign">=</div>
        <div className="ansDiv">
          <p className={this.checkCal1() ? "colorGreen" : "colorRed"}>
            {this.state.digits_d[3].value}
          </p>
          <Expr checkCal={this.checkCal1} />
        </div>
      </div>
    );
  }
}

export default App;
