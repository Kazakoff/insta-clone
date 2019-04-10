import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./components/Header";
import Wall from "./components/Wall";
import AddPostForm from "./components/AddPostForm";
import * as PostActions from "./Actions/PostActions";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
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
Main.propTypes = {
  user: PropTypes.string
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
