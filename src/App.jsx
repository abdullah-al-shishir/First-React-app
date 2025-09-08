import { useState } from "react";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      clear: "",
    };
  }

  changedData = (input) => {
    this.setState({
      inputText: input.target.value,
    });
    console.log(input.target.value);
  };
  btnClear = () => {
    this.setState({
      inputText: "",
      clear: "",
    });
    console.log("cleared");
  };
  render() {
    const { inputText, clear } = this.state;
    return (
      <div>
        <input type="text" onChange={this.changedData} value={inputText} />
        <button onClick={this.btnClear}>Clear</button>
        <p>
          {inputText}
          {clear}
        </p>
      </div>
    );
  }
}
export default App;
