import { ADD_POST, DELETE_POST, LOAD_POSTS, CLEAR_POSTS, LIKE_POST } from '../Actions/ActionsTypes';

function posts(state = [], action) {
  switch (action.type) {
    case LIKE_POST: {
      const { currentUser, dataTime } = action.payload;
      const newPosts = [...state];
      const likedPost = newPosts.find(post => post.dataTime === dataTime);
      if (likedPost.likes.find(userLike => userLike === currentUser)) { likedPost.likes = likedPost.likes.filter(userLike => userLike !== currentUser); } else likedPost.likes = likedPost.likes.concat(currentUser);
      return newPosts;
    }
    case LOAD_POSTS:
      return state.concat(action.payload);
    case CLEAR_POSTS:
      return [];
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.dataTime !== action.payload.dataTime);
    default:
      return state;
  }
}

export default posts;
