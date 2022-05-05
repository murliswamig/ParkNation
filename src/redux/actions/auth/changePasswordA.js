import {postService} from '../../../services/postServices'
import {changePasswordError, changePasswordLoading, changePasswordSuccess,} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({type: changePasswordLoading});
const apiSucceed = payload => ({type: changePasswordSuccess, payload});
const apiError = payload => ({type: changePasswordError, payload});


const changePasswordA = ({user_id, new_password, confirm_password,old_password}) => async (dispatchEvent, getState) => {

    const body = {
        user_id: user_id,
        new_password: new_password,
        confirm_password: confirm_password,
        old_password: old_password,
    }
    console.log('the body of reset pass is ', body)
    dispatchEvent(apiLoading());
    try {
        postService(apiName.changePassword, body)
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
export default changePasswordA;
