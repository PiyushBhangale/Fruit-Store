// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import InputManager from "./InputManager";
import { Redirect } from "react-router-dom";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: new InputManager()
    };
  }

  update(currentDelta) {
    const keys = this.state.input.pressedKeys;
    if (keys.enter) {
      {
        return <Redirect to="/home" />;
      }
    }
    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentDidMount() {
    this.state.input.bindKeys();
    //  this.updateCanvas();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentWillUnmount() {
    this.state.input.unbindKeys();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>WELCOME TO FRUIT</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Press ENTER to proceed.</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
