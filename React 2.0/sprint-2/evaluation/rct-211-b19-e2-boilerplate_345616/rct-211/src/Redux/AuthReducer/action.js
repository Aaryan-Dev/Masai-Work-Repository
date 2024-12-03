//Create ActionCreator functions here

//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

export const getLog = (value) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .get("https://reqres.in/api/login", value)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};
