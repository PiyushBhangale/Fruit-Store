// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import InputManager from "./InputManager";
import Main from "./Main";
const WindowState = {
  Welcome: 0,
  HomePage: 1
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: new InputManager(),
      windowstate: WindowState.Welcome
    };
  }

  update(currentDelta) {
    const keys = this.state.input.pressedKeys;
    if (this.state.windowstate === WindowState.Welcome && keys.enter) {
      console.log("Pressed Enter Key");
      this.homePage();
    }
    requestAnimationFrame(() => {
      this.update();
    });
  }
  homePage() {
    this.setState({
      windowstate: WindowState.HomePage
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
        {this.state.windowstate === WindowState.Welcome ? (
          <header className="App-header">
            <h3>WELCOME TO FRUIT</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>Press ENTER to proceed.</code>
            </p>
          </header>
        ) : (
          <Main />
        )}
      </div>
    );
  }
}

export default App;
