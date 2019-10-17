import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Post from './Post';

class Wall extends React.PureComponent {
  onLikeHandler = id => this.props.onLike(id, this.props.currentUser);

  render() {
    const { postsIsLoading, posts, onDelete, liked } = this.props;
    if (!postsIsLoading) return <div> Loading...</div>;

    return (
      <ListGroup className="wall">
        {posts ? (
          posts
            .slice(0)
            .map(post => (
              <Post
                key={post.dataTime.toString()}
                post={post}
                onDelete={onDelete}
                liked={liked}
                onLike={this.onLikeHandler}
              />
            ))
        ) : (
          <div> Empty </div>
        )}
      </ListGroup>
    );
  }
}

Wall.propTypes = {
  onDelete: PropTypes.func,
  postsIsLoading: PropTypes.bool,
  onLike: PropTypes.func,
  liked: PropTypes.bool,
  currentUser: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      dataTime: PropTypes.dataTime
    })
  )
};

Wall.defaultProps = {
  currentUser: '',
  onDelete: (PropTypes.func = () => {}),
  postsIsLoading: false,
  posts: [],
  onLike: () => {},
  liked: false
};

export default Wall;
