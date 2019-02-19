import { createStore, compse } from "redux";
import { createHistory } from "history";
import rootReducer from "./reducers/index";

export const history = createHistory();
const store = createStore(rootReducer);

export default store;
