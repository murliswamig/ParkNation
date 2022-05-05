import { postService } from '../../services/postServices'
import { sendOTPError, sendOTPSuccess, sendOTPLoading } from '../constants/reduxConstant'
import apiName from '../../constants/apiName'

const apiLoading = () => ({ type: sendOTPLoading });
const apiSucceed = payload => ({ type: sendOTPSuccess, payload });
const apiError = payload => ({ type: sendOTPError, payload });

export default VerificationA = (OTP, email, type) => async (dispatchEvent, getState) => {
    const body = {
        otp: OTP,
        email: email,
        type: type,
    }
    dispatchEvent(apiLoading());
    try {
        postService(apiName.verifyEmailOTP, body)
            .then(async res => {
                if (res.data.status !== 0) {
                    dispatchEvent(apiSucceed(res));
                } else {
                    dispatchEvent(apiError(res));
                }
            })
            .catch(error => {
                dispatchEvent(apiError(error));
            });
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};
