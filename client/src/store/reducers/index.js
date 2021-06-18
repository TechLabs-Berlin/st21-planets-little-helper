import { combineReducers } from "redux";
import currentUser from "./currentUser";
import error from "./error";
import {challenges} from "./challenges";

const rootReducer = combineReducers({
  currentUser,
  error,
  challenges,
});

export default rootReducer;
