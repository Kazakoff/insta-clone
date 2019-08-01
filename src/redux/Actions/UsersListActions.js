import { REG_USER, DEL_USER } from './ActionsTypes';

export const delUser = login => ({
  type: DEL_USER,
  payload: login
});
export const regUser = user => ({
  type: REG_USER,
  payload: user
});
