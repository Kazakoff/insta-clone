import React from "react";
import Post from "../Post";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { deletePost } from "../../Actions/PostActions";
import PropTypes from "prop-types";
import PostErrorCather from "../ErrorCather";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    postsIsLoading: state.postsIsLoading
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
  else {
    return (
      <ListGroup>
        {posts.slice(0).map(post => (
          <PostErrorCather>
            <Post
              key={post.dataTime.toString()}
              post={post}
              onDelete={onDelete}
            />
          </PostErrorCather>
        ))}
      </ListGroup>
    );
  }
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
