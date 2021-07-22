import { addError } from "./error";
import {
  LOAD_CHALLENGES,
  DELETE_USER_CHALLENGE,
  GET_USER_CHALLENGES,
  SET_CHALLENGE_AS_COMPLETED,
  ADD_USER_CHALLENGE,
  UPDATE_PROFILE_PICTURE,
} from "../actionTypes";
import axios from "axios";

export const updatePic = (imageUrl) => ({
  type: UPDATE_PROFILE_PICTURE,
  imageUrl,
});

export const loadChallenges = (challenges) => ({
  type: LOAD_CHALLENGES,
  challenges,
});

export const remove = (id) => ({
  type: DELETE_USER_CHALLENGE,
  id,
});

export const add = (challenge) => ({
  type: ADD_USER_CHALLENGE,
  challenge,
});

export const getChallenges = (challenges) => ({
  type: GET_USER_CHALLENGES,
  challenges,
});

export const setComplete = (id, update) => ({
  type: SET_CHALLENGE_AS_COMPLETED,
  id,
  update,
});

export const completeChallenge = (userId, challengeId, update) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `/api/user/${userId}/completed`,
      data: {
        challengeId,
        update,
      },
    }).then((res) => {
      dispatch(setComplete(challengeId, update));
    });
  };
};

export const getUserChallenges = (userId) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `/api/user/${userId}`,
    })
      .then((res) => {
        const userChallenges = res.data.challenges;
        dispatch(getChallenges(userChallenges));
      })
      .catch((err) => addError(err.message));
  };
};

export const deleteChallenge = (userId, challengeId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `/api/user/${userId}/challenges`,
      data: {
        challengeId,
      },
    })
      .then(() => {
        dispatch(remove(challengeId));
      })
      .catch((err) => addError(err.message));
  };
};

export const addChallenge = (userId, challengeId) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `/api/user/${userId}/challenges`,
      data: {
        challengeId,
      },
    })
      .then((res) => {
        dispatch(add(res.data));
      })
      .catch((err) => addError(err.message));
  };
};

export const fetchChallenges = () => {
  return (dispatch) => {
    return axios("/api/challenges")
      .then((res) => {
        dispatch(loadChallenges(res.data));
      })
      .catch((err) => addError(err.message));
  };
};

export function updateProfilePic(userId, profilePic) {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `/api/user/${userId}/image`,
      data: profilePic,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        dispatch(updatePic(res.data.imageUrl));
      })
      .catch((err) => addError(err.message));
  };
}
