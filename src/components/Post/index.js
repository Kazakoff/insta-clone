import React from "react";
import "./Post.css";
import PropTypes from "prop-types";
import { ListGroupItem } from "react-bootstrap";
// import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledPost = css`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 60px;
  margin-left: 20%;
  margin-right: 20%;
`;
const Post = ({ post, onDelete }) => {
  return (
    <ListGroupItem className={StyledPost}>
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
