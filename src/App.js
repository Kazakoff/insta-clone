import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Wall from "./components/Wall";
import AddPostForm from "./components/AddPostForm";
import { Provider } from "react-redux";
import store, { history } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <AddPostForm />
          <Wall />
        </div>
      </Provider>
    );
  }
}

export default App;
