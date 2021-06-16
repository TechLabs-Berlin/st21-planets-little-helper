import {
  LOAD_CHALLENGES,
  DELETE_USER_CHALLENGE,
  SET_USER_CHALLENGE,
  SET_CHALLENGE_AS_COMPLETED,
} from "../actionTypes";

const challenges = (state = [], action) => {
  switch (action.type) {
    case LOAD_CHALLENGES:
      return [...action.challenges];

    default:
      return state;
  }
};

const userChallenges = (state = [], action) => {
  switch (action.type) {
    case SET_USER_CHALLENGE:
      return [...action.challenges];
    case DELETE_USER_CHALLENGE:
      return state.filter((challenge) => challenge.id !== action.id);
    case SET_CHALLENGE_AS_COMPLETED:
      return state.map((c) => c.id === action.id ? {...c, completed: action.update} : c)
    default:
      return state;
  }
};

export { challenges, userChallenges };
