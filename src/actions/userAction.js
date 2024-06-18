import api from "../services/ApiServices";
import * as userConstants from "../constants/userConstants";
import { getErrorMessage } from "../utilities/getErrorMessage";

export const signUp = (data) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.SIGNUP_START });

    await api.post(`/register`, data).then((resp) => {
      const message = resp.data.message;
      dispatch({
        type: userConstants.SIGNUP_SUCCESS,
        payload: message,
      });
    });
  } catch (error) {
    dispatch({
      type: userConstants.SIGNUP_FAIL,
      payload: getErrorMessage(error),
    });
  }
};

export const signIn = (data) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.SIGNIN_START });

    await api.post(`/login`, data).then((resp) => {
      const authData = resp.data.user;
      const token = resp.data.access_token;

      const userInfo = {
        ...authData,
        token,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      dispatch({
        type: userConstants.SIGNIN_SUCCESS,
        payload: userInfo,
      });
    });
  } catch (error) {
    dispatch({
      type: userConstants.SIGNIN_FAIL,
      payload: getErrorMessage(error),
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: userConstants.SIGNIN_RESET });
};
