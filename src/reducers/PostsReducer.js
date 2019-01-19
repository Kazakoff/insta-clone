import { ADD_POST, DELETE_POST } from "../Data/ActionsTypes";

function posts(state = [], action) {
  switch (action.type) {
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
