import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
// import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import * as style from './Post-style';

const Post = ({ post, onDelete }) => (
  <ListGroupItem className={style.Post}>
    <style.PostImageWraper>
      {post.pic !== '' ? <style.PostImage alt={post.caption} src={post.pic} /> : ''}
    </style.PostImageWraper>
    <style.PostCaption>{post.content}</style.PostCaption>
    {onDelete ? (
      <button type="button" onClick={() => onDelete(post.dataTime)}>
        Remove
      </button>
    ) : (
      ''
    )}
  </ListGroupItem>
);

Post.propTypes = {
  post: PropTypes.shape({
    pic: PropTypes.string,
    caption: PropTypes.string,
    content: PropTypes.string,
    dataTime: PropTypes.any
  }),
  onDelete: PropTypes.func
};

Post.defaultProps = {
  post: {},
  onDelete: () => {}
};
export default Post;
