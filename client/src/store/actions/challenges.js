import { addError } from "./error";
import { LOAD_CHALLENGES, DELETE_USER_CHALLENGE, SET_USER_CHALLENGE, SET_CHALLENGE_AS_COMPLETED } from "../actionTypes";
import { apiCall } from "../../services/api";
import axios from "axios";

export const loadChallenges = (challenges) => ({
  type: LOAD_CHALLENGES,
  challenges,
});

export const remove = (id) => ({
  type: DELETE_USER_CHALLENGE,
  id,
});

export const setChallenges = (challenges) => ({
  type: SET_USER_CHALLENGE,
  challenges,
});

export const setComplete = (id, update) => ({
  type: SET_CHALLENGE_AS_COMPLETED,
  id,
  update,
})

export const completeChallenge = (userId, challengeId, update) => {
  return dispatch => {
    return axios({method: "post", url: `http://localhost:8000/api/user/${userId}/completed`, data: {
      challengeId,
      update
    }})
    .then((res) => {
      dispatch(setComplete(challengeId, update))
    })
    
  }
}

export const populateUserChallenges = (userId) => {
  return dispatch => {
    return axios({method: "get", url: `http://localhost:8000/api/user/${userId}`})
    .then(res => {
      const userChallenges = res.data.challenges;
      dispatch(setChallenges(userChallenges))
    })
    .catch(err => addError(err.message))
  }
}

export const deleteChallenge = (userId, challengeId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:8000/api/user/${userId}/challenges`,
      data: {
        challengeId,
      },
    })
      .then((res) => {
        dispatch(remove(challengeId));
      })
      .catch((err) => addError(err.message));
  };
};

export const fetchChallenges = () => {
  return (dispatch) => {
    return apiCall("get", "http://localhost:8000/api/challenges")
      .then((res) => {
        dispatch(loadChallenges(res));
      })
      .catch((err) => addError(err.message));
  };
};
