import React, { Component } from "react";

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: "",
      number1: num1,
      number2: num2,
      result: ""
    };
  }

  calcul = () => {
    const res = this.state.number1 + this.state.number2;
    console.log(res);
  };

  checkSolution = () => {
    const { number1, number2, play } = this.state;
    if (number1 + number2 === Number(play)) return console.log("ok");
  };

  onInputChange = ({ target: { value } }) => {
    this.setState(
      {
        play: value
      },
      this.checkSolution
    );
  };

  render() {
    return (
      <div>
        <h2>
          {this.state.number1} + {this.state.number2}
        </h2>
        <input onChange={this.onInputChange} value={this.state.play} />
        <button onClick={this.calcul}>Play</button>
      </div>
    );
  }
}
