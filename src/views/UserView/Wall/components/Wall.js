import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Post from './Post';

function Wall({ postsIsLoading, posts, onDelete }) {
  if (!postsIsLoading) return <div> Loading...</div>;

  return (
    <ListGroup>
      {posts ? (
        posts
          .slice(0)
          .map(post => <Post key={post.dataTime.toString()} post={post} onDelete={onDelete} />)
      ) : (
        <div> Пока постов нет </div>
      )}
    </ListGroup>
  );
}

Wall.propTypes = {
  onDelete: PropTypes.func,
  postsIsLoading: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      dataTime: PropTypes.dataTime
    })
  )
};

Wall.defaultProps = {
  onDelete: (PropTypes.func = () => {}),
  postsIsLoading: false,
  posts: []
};

export default Wall;
