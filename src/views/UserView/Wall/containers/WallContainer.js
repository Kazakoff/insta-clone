import { connect } from 'react-redux';
import { deletePost } from '../../../../redux/Actions/PostActions';
import Wall from '../components/Wall';
import { getPostMemoized } from '../../../../redux/selectors';

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
