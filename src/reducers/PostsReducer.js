import { ADD_POST, DELETE_POST, LOAD_POSTS } from "../Data/ActionsTypes";

function posts(state = [], action) {
  console.log("post reducer");
  switch (action.type) {
    case LOAD_POSTS:
      console.log(action.payload);
      return [...state, action.payload];
    case ADD_POST:
      console.log(action.payload);
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.dataTime !== action.payload.dataTime);
    default:
      return state;
  }
}

export default posts;
