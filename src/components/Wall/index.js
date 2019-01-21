import React, { Component } from "react";
import "./Wall.css";
import Post from "../Post";
import PostList from "../../Data/PostList";
import { ListGroup } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as PostActions from "../../Actions/PostActions";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispachToProps(dispatch) {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
}
class WallE extends Component {
  constructor() {
    super();
    this.state = {
      posts: PostList["I.I@vstu.by"]
    };
  }
  render() {
    return (
      <ListGroup>
        {this.state.posts.slice(0).map(post => (
          <Post
            key={post.dataTime.toString()}
            image={post.pic}
            caption={post.content}
          />
        ))}
      </ListGroup>
    );
  }
}

const Wall = connect(
  mapStateToProps,
  mapDispachToProps
)(WallE);

export default Wall;
