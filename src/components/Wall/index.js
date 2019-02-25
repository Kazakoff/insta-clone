import React from "react";
import Post from "../Post";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { deletePost } from "../../Actions/PostActions";
import PropTypes from "prop-types";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    postsIsLoading: state.postIsLoading
  };
}

function mapDispachToProps(dispatch) {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
}

function WallRaw({ postsIsLoading, posts, onDelete }) {
  if (!postsIsLoading) return <div> Loading...</div>;
  else
    return (
      <ListGroup>
        {posts.slice(0).map(post => (
          <Post
            key={post.dataTime.toString()}
            post={post}
            onDelete={onDelete}
          />
        ))}
      </ListGroup>
    );
}

WallRaw.propTypes = {
  posts: PropTypes.array,
  onDelete: PropTypes.func,
  postsIsLoading: PropTypes.bool
};

const Wall = connect(
  mapStateToProps,
  mapDispachToProps
)(WallRaw);

export default Wall;
