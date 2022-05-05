import { postService } from '../../services/postServices';
import { forgotError, forgotSuccess, forgotLoading } from '../constants/reduxConstant';
import apiName from '../../constants/apiName';


const apiLoading = () => ({ type: forgotLoading });
const apiSucceed = payload => ({ type: forgotSuccess, payload });
const apiError = payload => ({ type: forgotError, payload });


const ForgotPasswordA = (email) => async (dispatchEvent, getState) => {
    const body = {
        email: email,
    }
    dispatchEvent(apiLoading());
    try {
        postService(apiName.forgotPassword, body)
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

export default ForgotPasswordA;
