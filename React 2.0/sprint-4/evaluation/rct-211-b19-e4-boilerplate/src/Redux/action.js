//Write the action creator functions here
import axios from "axios";
import * as types from "./actionTypes";

export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  return axios
    .get("http://localhost:8080/products")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE });
    });
};
// *************************************************************
export const addData = (value) => (dispatch) => {
  console.log(value);
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  axios
    .post("http://localhost:8080/products", value)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GET_PRODUCTS_FAILURE });
    });
};
// *************************************************************
export const deletData = (id) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  return axios
    .delete("http://localhost:8080/products/" + id)
    .then((res) => {
      dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PRODUCT_FAILURE });
    });
};
// *************************************************************
export const editData = (value, id) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  return axios
    .patch("http://localhost:8080/products/" + id, value)
    .then((res) => {
      dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PRODUCT_FAILURE });
    });
};
