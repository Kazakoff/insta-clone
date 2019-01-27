import { ADD_POST, DELETE_POST, LOAD_POSTS } from "../Data/ActionsTypes";
import postList from "../Data/PostList";
import postslist from "../Data/PostList";

const Init_list = postslist["V.K@vstu.by"];

function posts(state = [], action) {
  console.log("post reducer");
  switch (action.type) {
    case LOAD_POSTS:
      console.log("load");
      return state.concat(action.payload);
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.dataTime !== action.payload.dataTime);
    default:
      return state;
  }
}

export default posts;
