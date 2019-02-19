import { DEL_USER, REG_USER } from "../Data/ActionsTypes";
import userslist from "../Data/UsersList";

function users(state = userslist, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case DEL_USER:
      delete newState[action.payload];
      return newState;
    case REG_USER:
      newState[action.payload.eMail] = action.payload;
      return newState;
    default:
      return state;
  }
}

export default users;
