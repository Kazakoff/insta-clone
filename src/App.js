import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Wall from "./components/Wall";
import AddPostForm from "./components/AddPostForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as PostActions from "./Actions/PostActions";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

class Main extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Header user={this.props.user} />
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
