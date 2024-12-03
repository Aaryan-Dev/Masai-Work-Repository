import axios from "axios";
import { failure, request, sucsess } from "../AppRedux/action";
// ************
export const addIt = (val) => {
  return { type: "ADD", payload: val };
};

export const subIt = (val) => {
  return { type: "SUB", payload: val };
};
// ************************* use of REDUX-THUNK DUE TO THIS 👇**************************
export const getTodo = (dispatch) => {
  dispatch(request());

  return axios
    .get("http://localhost:3000/posts")
    .then((res) => {
      console.log(res.data);
      dispatch(sucsess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(failure());
    });
};
// ************************* use of REDUX-THUNK DUE TO THIS 👆**************************
// ************
