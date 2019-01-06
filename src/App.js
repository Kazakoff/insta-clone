import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
