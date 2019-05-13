import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { deletePost } from "../../Actions/PostActions";
import Post from "../Post";
import PostErrorCather from "../ErrorCather";

const getPosts = state => state.posts;

const getPostMemoized = createSelector(
  getPosts,
  state => state
);

function mapStateToProps(state) {
  return {
    posts: getPostMemoized(state),
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
      <PostErrorCather>
        <ListGroup>
          {posts ? (
            posts
              .slice(0)
              .map(post => <Post key={post.dataTime.toString()} post={post} onDelete={onDelete} />)
          ) : (
            <div> Пока постов нет </div>
          )}
        </ListGroup>
      </PostErrorCather>
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
