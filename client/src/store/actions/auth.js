import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./error";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `http://localhost:8000/api/user/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(setCurrentUser(user));
          dispatch(removeError);
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.message));
          reject();
        });
    });
  };
}