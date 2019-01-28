import { GET_USER } from "../Data/ActionsTypes";

function user(state = "V.K@vstu.by", action) {
  console.log(action);
  switch (action.type) {
    case GET_USER:
      let st = Object({}, state);
      console.log(st);
      st = action.payload.login;
      console.log(st);
      return st;
    default:
      return state;
  }
}

export default user;
