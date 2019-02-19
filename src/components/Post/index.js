import React from "react";
import "./Post.css";
import PropTypes from "prop-types";
import { ListGroupItem } from "react-bootstrap";
import styled from "@emotion/styled";

const Post = ({ post, onDelete }) => {
  return (
    <ListGroupItem className="Post">
      <div className="Post-image">
        {post.pic !== "" ? <img alt={post.caption} src={post.pic} /> : ""}
      </div>
      <div className="Post-caption">{post.content}</div>
      <button
        className="btn btn-danger"
        onClick={() => onDelete(post.dataTime)}
      >
        Remove
      </button>
    </ListGroupItem>
  );
};

Post.propTypes = {
  post: PropTypes.string,
  onDelete: PropTypes.func
};

export default Post;
