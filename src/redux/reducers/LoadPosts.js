import { POSTS_IS_LOADING } from '../Actions/ActionsTypes';

function postsIsLoading(state = true, action) {
  switch (action.type) {
    case POSTS_IS_LOADING:
      return action.payload.postsIsLoading;
    default:
      return state;
  }
}

export default postsIsLoading;
