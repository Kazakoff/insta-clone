import React from "react";
import "./Post.css";
import PropTypes from "prop-types";
import { ListGroupItem } from "react-bootstrap";
// import styled from "@emotion/styled";
import { css } from "@emotion/core";
import * as style from "./Post-style.js";

const Post = ({ post, onDelete }) => {
  return (
    <ListGroupItem className={style.Post}>
      <div className={style.PostImageWraper}>
        {post.pic !== "" ? (
          <style.PostImage alt={post.caption} src={post.pic} />
        ) : (
          ""
        )}
      </div>
      <div className={style.PostCaption}>{post.content}</div>
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
