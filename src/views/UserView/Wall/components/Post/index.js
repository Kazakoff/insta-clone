import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

import './styles.scss';

const Post = ({ post, onDelete, liked, onLike }) => (
  <ListGroupItem className="post">
    <div className="headWrapper">
      <div className="post__caption">{post.dataTime}</div>
    </div>
    <div className="imageWrapper">
      {post.pic !== '' ? (
        <img className="imageWrapper__image" alt={post.caption} src={post.pic} />
      ) : (
        ''
      )}
    </div>
    <div className="contentWrapper">
      <div className="post__caption">{post.content}</div>
    </div>

    <div className="controlsWrapper">
      <div className="post__button">
        {onDelete ? (
          <button type="button" onClick={() => onDelete(post.dataTime)}>
            Remove
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="post__heart--liked">DDD</div>
      <div className={liked ? 'post__heart--liked' : 'post__heart--none'}>
        <div role="button" onClick={() => onLike(post.dataTime)}>
          &hearts; {post.likes.length}
        </div>
      </div>
    </div>
  </ListGroupItem>
);

Post.propTypes = {
  post: PropTypes.shape({
    pic: PropTypes.string,
    caption: PropTypes.string,
    content: PropTypes.string,
    dataTime: PropTypes.any,
    likes: PropTypes.array
  }),
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
  liked: PropTypes.bool
};

Post.defaultProps = {
  post: {},
  onDelete: () => {},
  onLike: () => {},
  liked: false
};
export default Post;
