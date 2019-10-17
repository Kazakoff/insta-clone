import { ADD_POST, DELETE_POST, LOAD_POSTS, CLEAR_POSTS, LIKE_POST } from '../Actions/ActionsTypes';

function posts(state = [], action) {
  switch (action.type) {
    case LIKE_POST: {
      const { user, dataTime } = action.payload;
      const newPosts = Object.assign({}, state);
      // -w
      if (newPosts[dataTime].likes.find(userLike => userLike === user)) {newPosts[dataTime].likes.filter(userLike => userLike !== user);}
      else newPosts[dataTime].likes.concat(user);
      console.log(newPosts);
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
