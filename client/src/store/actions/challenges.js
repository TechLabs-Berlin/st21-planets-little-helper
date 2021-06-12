import {addError} from "./error";
import {LOAD_CHALLENGES } from "../actionTypes";
import { apiCall } from "../../services/api";

export const loadChallenges = (challenges) =>({
    type: LOAD_CHALLENGES,
    challenges
})

export const fetchChallenges = () => {
    return dispatch => {
        return apiCall("get", "http://localhost:8000/api/challenges")
        .then((res) => {
            dispatch(loadChallenges(res))
        })
        .catch(err => addError(err.message))
    }
}
