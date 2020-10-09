import React, { Component } from "react";
import "./digits.css";

class Digit extends Component {
  state = {};
  render() {
    return (
      <div className="expDiv">
        <div className="digitsDiv">
          <div className="digitBackground">
            <span className="display_digit" onChange={this.props.checkVal()}>
              {this.props.digits_d[0].value}
            </span>
            <br />
          </div>
          <div className="buttonsDiv">
            <div>
              <button
                onClick={() => this.props.onIncrement(this.props.digits_d[0])}
                className="addButton"
              >
                <p className="plusSign">+</p>
              </button>
            </div>

            <div>
              <button
                onClick={() => this.props.onDecrement(this.props.digits_d[0])}
                className="decrementButton"
              >
                <div className="minusSign">-</div>
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="sign">x</p>
        </div>

        <div className="digitsDiv">
          <div className="digitBackground">
            <span className="display_digit" onChange={this.props.checkVal()}>
              {this.props.digits_d[1].value}
            </span>
            <br />
          </div>

          <div className="buttonsDiv">
            <div>
              <button
                onClick={() => this.props.onIncrement(this.props.digits_d[1])}
                className="addButton"
              >
                +
              </button>
            </div>

            <div>
              <button
                onClick={() => this.props.onDecrement(this.props.digits_d[1])}
                className="decrementButton"
              >
                <div className="minusSign">-</div>
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="sign">-</p>
        </div>

        <div className="digitsDiv">
          <div className="digitBackground">
            <span className="display_digit" onChange={this.props.checkVal()}>
              {this.props.digits_d[2].value}
            </span>
            <br />
          </div>
          <div className="buttonsDiv">
            <div>
              <button
                onClick={() => this.props.onIncrement(this.props.digits_d[2])}
                className="addButton"
              >
                +
              </button>
            </div>

            <div>
              <button
                onClick={() => this.props.onDecrement(this.props.digits_d[2])}
                className="decrementButton"
              >
                <div className="minusSign">-</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Digit;
