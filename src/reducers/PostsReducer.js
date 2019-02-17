import {
  ADD_POST,
  DELETE_POST,
  LOAD_POSTS,
  CLEAR_POSTS
} from "../Data/ActionsTypes";

function posts(state = [], action) {
  console.log("post reducer");
  switch (action.type) {
    case LOAD_POSTS:
      console.log("load");
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
