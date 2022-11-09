import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./AppRedux/reducer";
import authReducer from "./AuthReducer/reducer";

const rootReducer = combineReducers({ appReducer, authReducer });

const logger1 = (store) => (next) => (action) => {
  console.log("Inside logger 1-a");
  const temp = next(action);
  console.log("After logger 1-b", temp);
  console.log(action);
  return temp;
};

const logger2 = (store) => (next) => (action) => {
  console.log("Inside logger 2-a");
  const temp = next(action);
  console.log("After logger 2-b", temp);
  console.log(action);
  return temp;
};

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(logger1, logger2)
);

export default store;
// ********************************************************
