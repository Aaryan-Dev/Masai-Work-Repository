import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./AppRedux/reducer";
import authReducer from "./AuthReducer/reducer";
import thunk from "redux-thunk";

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

const MiddleWareCustomThunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log(action);
    console.log("A function as action");
    return action(store.dispatch);
    //exactly to ->▶️ getTodo(dispatch);
  }
  return next(action);
};

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(
    thunk /*else use -->▶️ MiddleWareCustomThunk */,
    logger1,
    logger2
  )
);

export default store;
// ********************************************************
