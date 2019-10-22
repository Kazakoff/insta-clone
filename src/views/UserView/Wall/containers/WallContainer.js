import { connect } from 'react-redux';
import { deletePost, likePost } from '../../../../redux/Actions/PostActions';
import Wall from '../components/Wall';
import { getPostMemoized } from '../../../../redux/selectors';

function mapStateToProps(state) {
  return {
    posts: getPostMemoized(state),
    postsIsLoading: state.postsIsLoading,
    currentUser: state.user
  };
}

function mapDispachToProps(dispatch) {
  return {
    onDelete: (id) => {
      dispatch(deletePost(id));
    },
    onLike: (id, user) => {
      console.log(user);
      dispatch(likePost(id, user));
    }
  };
}

const WallContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(Wall);

export default WallContainer;
