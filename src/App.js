import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Wall from "./components/Wall";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Wall />
        </div>
      </div>
    );
  }
}

export default App;
