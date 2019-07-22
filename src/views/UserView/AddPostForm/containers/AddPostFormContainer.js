import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createPost } from '../../../../redux/Actions/PostActions';
import AddPostForm from '../components/AddPostForm';

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: (state, user) => {
      dispatch(createPost(state, user));
    }
  };
}

const getUser = state => state.user;
const getUserMemoized = createSelector(
  getUser,
  state => state.user
);

function mapStateToProps(state) {
  return {
    // user: state.user
    user: getUserMemoized(state)
  };
}

const AddPostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostForm);

export default AddPostFormContainer;
