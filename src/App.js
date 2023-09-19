import React, { Component } from 'react';
import "./App.css"

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      result: 0,
    };
  }

  handleNum1Change = (e) => {
    this.setState({ num1: e.target.value });
  };

  handleNum2Change = (e) => {
    this.setState({ num2: e.target.value });
  };

  addNumbers = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) + parseFloat(num2);
    this.setState({ result });
  
  };
  render() {
    return (
      <div class="calc">
        <h3>Simple Calculator for Addition</h3>
        <div className='input1'><input
          type="number"
          placeholder="Enter first number"
          value={this.state.num1}
          onChange={this.handleNum1Change}
        /></div>
        <div className='input2'><input
          type="number"
          placeholder="Enter second number"
          value={this.state.num2}
          onChange={this.handleNum2Change}
        /></div>
        <button onClick={this.addNumbers}>Add</button>
        {/* <button className='button clear-button' onClick={this.handleClear}>Clear</button> */}

        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
