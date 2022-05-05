import { postService } from '../../services/postServices';
import {
  resendOtpLoading,
  resendOtpSuccess,
  resendOtpError,
} from '../constants/reduxConstant';
import apiName from '../../constants/apiName';

const apiLoading = () => ({ type: resendOtpLoading });
const apiSucceed = (payload) => ({ type: resendOtpSuccess, payload });
const apiError = (payload) => ({ type: resendOtpError, payload });

export default ResendA = (email) => async (dispatchEvent, getState) => {

  console.log("resend email id i s",email)
  let body = new FormData();
  body.append('email', email);
  body.append('type', 'signup');

  dispatchEvent(apiLoading());
  try {
    postService(apiName.sendEmailOtp, body)
      .then(async (res) => {
        console.log("email otp res",res.data.status)
        if (res.data.status === 'success') {
          dispatchEvent(apiSucceed(res.data));
        } else {
          dispatchEvent(apiError(res));
        }
      })
      .catch((error) => {
        dispatchEvent(apiError(error));
      });
  } catch (e) {
    dispatchEvent(apiError(e));
  }
};
