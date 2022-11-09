import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", payload)

    .then((res) => {
      dispatch({
        type: types.USER_LOGIN_SUCCSESS,
        payload: res.data.token,
      });
      return res;
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });
};

export { login };
