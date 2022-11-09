//Import the 2 reducers as "AuthReducer" and "AppReducer".

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
// NOTE: use this store variable to create a store.
import thunk from "redux-thunk";

let rootreducer = combineReducers({ AppReducer, AuthReducer });

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
