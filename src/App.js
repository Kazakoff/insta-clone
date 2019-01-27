import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Wall from "./components/Wall";
import AddPostForm from "./components/AddPostForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as PostActions from "./Actions/PostActions";
import posts from "./Data/PostList";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

// create an object for the default data
// const user = "V.K@vstu.by";

class Main extends Component {
  componentDidMount() {
    console.log(this.props);
    // console.log(this.state);
    // console.log(posts[this.props.user]);
    this.props.loadPost(posts[this.props.user]);
  }
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
