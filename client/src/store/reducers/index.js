import { combineReducers } from "redux";
import currentUser from "./currentUser";
import error from "./error";
import {challenges, userChallenges} from "./challenges";

const rootReducer = combineReducers({
  currentUser,
  error,
  challenges,
  userChallenges
});

export default rootReducer;
