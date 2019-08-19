import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

import './styles.scss';

const Post = ({ post, onDelete }) => (
  <ListGroupItem className="post">
    <div className="headWraper">
      <div className="post__caption">{post.dataTime}</div>
    </div>
    <div className="imageWraper">
      {post.pic !== '' ? (
        <img className="imageWraper__image" alt={post.caption} src={post.pic} />
      ) : (
        ''
      )}
    </div>
    <div className="contentWraper">
      <div className="post__caption">{post.content}</div>
    </div>

    <div className="controlsWraper">
      {onDelete ? (
        <button type="button" onClick={() => onDelete(post.dataTime)}>
          Remove
        </button>
      ) : (
        ''
      )}
    </div>
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
