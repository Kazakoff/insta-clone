import React from "react";
import Post from "../Post";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { deletePost } from "../../Actions/PostActions";

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

function WallRaw({ posts, onDelete }) {
  return (
    <ListGroup>
      {posts.slice(0).map(post => (
        <Post key={post.dataTime.toString()} post={post} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
}

const Wall = connect(
  mapStateToProps,
  mapDispachToProps
)(WallRaw);

export default Wall;
