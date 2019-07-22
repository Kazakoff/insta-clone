import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { deletePost } from '../../../../redux/Actions/PostActions';
import Wall from '../components/Wall';

const getPosts = state => state.posts;

const getPostMemoized = createSelector(
  getPosts,
  state => state
);

function mapStateToProps(state) {
  return {
    posts: getPostMemoized(state),
    postsIsLoading: state.postsIsLoading
  };
}

function mapDispachToProps(dispatch) {
  return {
    onDelete: (id) => {
      dispatch(deletePost(id));
    }
  };
}

const WallContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(Wall);

export default WallContainer;
