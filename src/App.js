import React, { Component } from "react";
import Counter from "./components/Counter";
import Container from "./components/Container";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
