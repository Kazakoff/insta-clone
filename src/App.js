import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Wall from "./components/Wall";
import AddPostForm from "./components/AddPostForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./Actions/PostActions";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class Main extends Component {
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
const App = connect(
  mapStateToProps,
  mapDispachToProps
)(Main);

export default App;
