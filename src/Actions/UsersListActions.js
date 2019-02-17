import { REG_USER, DEL_USER } from "../Data/ActionsTypes";

export const delUser = (login, password) => ({
  type: DEL_USER,
  payload: login
});
export const regUser = user => ({
  type: REG_USER,
  payload: user
});
