import { GET_USER } from "../Data/ActionsTypes";

function users(state = [], action) {
  console.log(action);
  switch (action.type) {
    case GET_USER:
      let st = Object({}, state);
      // console.log(state);
      st.user = action.payload.login;
      console.log(st);
      return state;
    default:
      return state;
  }
}

export default users;