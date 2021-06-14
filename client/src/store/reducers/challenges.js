import {
  LOAD_CHALLENGES,
  DELETE_USER_CHALLENGE,
  SET_USER_CHALLENGE,
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
      return state.filter((challenge) => challenge !== action.id);
    default:
      return state;
  }
};

export { challenges, userChallenges };
