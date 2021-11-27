import React, { Component } from "react";
import { Connect } from "react-redux";
import data from "./data";
import "./App.css";
class App extends Component {
  state = {
    data,
  };
  organise = (data) => {
    let name = data.author.name;
    let avatar = data.author.avatar;
    let text = data.text;
    let display = [];
    display.push(
      <div>
        <span>
          ${name} ${avatar}
        </span>
        ${text}
      </div>
    );
    if (data.replies) {
      for (let i = 0; i < data.replies.length; i++) {
        return this.organise(data.replies[i]);
      }
    }
    console.log(display);
    return display
  };
  render() {
    return (
      <div className="App">
        <div className="data">${this.organise(this.state.data)}</div>
      </div>
    );
  }
}

export default App;
