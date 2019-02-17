import React, { Component } from "react";
import "./Post.css";
import { ListGroupItem } from "react-bootstrap";

const Post = props => {
  const post = props.post;
  const onDelete = props.onDelete;
  let picture;
  if (post.pic !== "")
    picture = (
      <div className="Post-image">
        <img alt={post.caption} src={post.pic} />
      </div>
    );
  else picture = "";
  return (
    <ListGroupItem className="Post">
      {picture}
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

export default Post;
