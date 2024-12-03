import { useState } from "react";
import store from "./store";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        count: state.count + payload,
      };
    case "SUB":
      return {
        ...state,
        count: state.count - payload,
      };

    default:
      return state;
  }
};

export default reducer;
