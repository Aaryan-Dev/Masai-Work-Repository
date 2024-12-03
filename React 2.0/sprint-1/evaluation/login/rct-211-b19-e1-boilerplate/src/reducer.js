//import the action types here from the actionTypes.js to be used in the reducer function

import { LOGIN_SUCCESS } from "./actionTypes";

//Complete the reducer function here
const reducer = (data, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...data, token: action.payload };

    case "auth":
      return { ...data, isAuth: true };
    default:
      return data;
  }
};

export { reducer };
