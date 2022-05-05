import {postService} from '../../../services/postServices'
import apiName from '../../../constants/apiName'
import {phoneOtpError, phoneOtpLoading, phoneOtpSuccess} from "../../constants/reduxConstant";


const apiLoading = () => ({type: phoneOtpLoading});
const apiSucceed = payload => ({type: phoneOtpSuccess, payload});
const apiError = payload => ({type: phoneOtpError, payload});

const phoneOtpA = (mobile_number) => async (dispatchEvent, getState) => {
    console.log('mobile_number', mobile_number)

    let body = new FormData();
    body.append('mobile_number', mobile_number);

    dispatchEvent(apiLoading());
    try {
        postService(apiName.sendPhoneOtp, body)
            .then(async res => {
                if (res.data.status === 'success') {
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
export default phoneOtpA;
