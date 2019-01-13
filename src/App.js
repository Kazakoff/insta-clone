import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Wall from "./components/Wall";
import AddPostForm from "./components/AddPostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddPostForm />
        <Wall />
      </div>
    );
  }
}

export default App;
