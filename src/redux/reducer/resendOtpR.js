import {
    resendOtpError,
    resendOtpSuccess,
    resendOtpLoading,
    SUCCESS,
    ERROR,
    LOADING,
    NONE,
  } from '../constants/reduxConstant';
  
  export default function ResendR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
      case resendOtpLoading:
        return Object.assign({}, state, {status: LOADING});
      case resendOtpSuccess:
        return Object.assign({}, state, {status: SUCCESS, value: action.payload});
      case resendOtpError:
        return Object.assign({}, state, {status: ERROR, error: action.payload});
      default:
        return Object.assign({}, state, {status: NONE});
    }
  }
  