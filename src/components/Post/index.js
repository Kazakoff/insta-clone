import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "react-bootstrap";
// import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import * as style from "./Post-style.js";

const Post = ({ post, onDelete }) => {
  return (
    <ListGroupItem className={style.Post}>
      <style.PostImageWraper>
        {post.pic !== "" ? (
          <style.PostImage alt={post.caption} src={post.pic} />
        ) : (
          ""
        )}
      </style.PostImageWraper>
      <style.PostCaption>{post.content}</style.PostCaption>
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
  post: React.PropTypes.shape({
    pic: React.PropTypes.string,
    caption: React.PropTypes.string
  }),
  onDelete: PropTypes.func
};

export default Post;
