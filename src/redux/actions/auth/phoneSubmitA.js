import {postService} from '../../../services/postServices'
import apiName from '../../../constants/apiName'
import {
    submitPhoneError,
    submitPhoneLoading,
    submitPhoneSuccess
} from "../../constants/reduxConstant";


const apiLoading = () => ({type: submitPhoneLoading});
const apiSucceed = payload => ({type: submitPhoneSuccess, payload});
const apiError = payload => ({type: submitPhoneError, payload});

const phoneSubmitA = ({user_id,mobile_number,email,otp}) => async (dispatchEvent, getState) => {
    console.log('updateEmailA', user_id, email, otp)

    let body = new FormData();
    body.append('user_id', user_id);
    body.append('mobile_number', mobile_number);
    body.append('email', email);
    body.append('otp', otp);

    dispatchEvent(apiLoading());
    try {
        postService(apiName.updateMobileNumber, body)
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
export default phoneSubmitA;
