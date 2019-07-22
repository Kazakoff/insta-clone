import { GET_USER } from '../Data/ActionsTypes';

function user(state = '', action) {
  let st = Object({}, state);
  switch (action.type) {
    case GET_USER:
      st = action.payload.login;
      return st;
    default:
      return state;
  }
}

export default user;
