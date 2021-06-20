import {
  SET_CURRENT_USER,
  DELETE_USER_CHALLENGE,
  GET_USER_CHALLENGES,
  SET_CHALLENGE_AS_COMPLETED,
  ADD_USER_CHALLENGE,
} from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {
    id: null, 
    username: null,
    challenges: []
  },
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
    case GET_USER_CHALLENGES:
      return {
        ...state,
        user: {
          ...state.user,
          challenges: action.challenges,
        },
      };
    case DELETE_USER_CHALLENGE:
      return {
        ...state,
        user: {
          ...state.user,
          challenges: state.user.challenges.filter((c) => c.id !== action.id),
        },
      };
    case ADD_USER_CHALLENGE:
      return {
        ...state,
        user: {
          ...state.user,
          challenges: [...state.user.challenges, action.challenge],
        },
      };
    case SET_CHALLENGE_AS_COMPLETED:
      return {
        ...state,
        user: {
          ...state.user,
          challenges: state.user.challenges.map((c) =>
            c.id === action.id ? { ...c, completed: action.update } : c
          ),
        },
      };
    default: {
      return state;
    }
  }
};

export default currentUser;

