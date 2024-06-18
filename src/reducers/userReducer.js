import * as userConstants from "../constants/userConstants";

export const signUp = (state = {}, action) => {
  switch (action.type) {
    case userConstants.SIGNUP_START:
      return {
        loading: true,
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        message: action.payload,
        success: true,
      };
    case userConstants.SIGNUP_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.SIGNUP_RESET:
      return {};

    default:
      return state;
  }
};

export const sigIn = (state = {}, action) => {
  switch (action.type) {
    case userConstants.SIGNIN_START:
      return {
        loading: true,
      };
    case userConstants.SIGNIN_SUCCESS:
      return {
        userInfo: action.payload,
        success: true,
      };
    case userConstants.SIGNIN_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.SIGNIN_RESET:
      return {};

    default:
      return state;
  }
};
