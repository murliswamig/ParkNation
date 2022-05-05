import {postService} from '../../services/postServices'
import {resetPasswordError, resetPasswordLoading, resetPasswordSuccess} from '../constants/reduxConstant'
import apiName from '../../constants/apiName'


const apiLoading = () => ({type: resetPasswordLoading});
const apiSucceed = payload => ({type: resetPasswordSuccess, payload});
const apiError = payload => ({type: resetPasswordError, payload});


const ResetPasswordA = (NewPassword, ConfirmPassword, email) => async (dispatchEvent, getState) => {
    // let body = new FormData();
    // console.log("name, password, fcmToken ==", email, password);
    // body.append('phone', email)
    // body.append('password', password)
    const body = {
        password: NewPassword,
        confirm_password: ConfirmPassword,
        email: email,
    }
    console.log('the body of reset pass is ', body)
    dispatchEvent(apiLoading());
    try {
        postService(apiName.resetPassword, body)
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
export default ResetPasswordA;
