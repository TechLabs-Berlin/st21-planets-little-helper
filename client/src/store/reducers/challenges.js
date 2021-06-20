import {
  LOAD_CHALLENGES,
} from "../actionTypes";

const challenges = (state = [], action) => {
  switch (action.type) {
    case LOAD_CHALLENGES:
      return [...action.challenges];
    default:
      return state;
  }
};

export { challenges };
