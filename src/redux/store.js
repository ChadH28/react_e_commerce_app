import { createStore, applyMiddleware } from "redux";
// console logs all redux actions and reducers
import logger from "redux-logger";
import rootReducer from "./root.reducer";

const middlewares = [
  logger
];

const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewares)
) 

export default store;