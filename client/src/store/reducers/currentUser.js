import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: localStorage.getItem("jwtToken") ? true : false,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : {},
};

const currentUser = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // is length 0 ?
        ...state,
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default: {
      return state;
    }
  }
};

export default currentUser;
