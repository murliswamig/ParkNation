import {postService} from '../../../services/postServices'
import apiName from '../../../constants/apiName'
import {updatePhoneError, updatePhoneLoading, updatePhoneSuccess} from "../../constants/reduxConstant";


const apiLoading = () => ({type: updatePhoneLoading});
const apiSucceed = payload => ({type: updatePhoneSuccess, payload});
const apiError = payload => ({type: updatePhoneError, payload});

const updatePhoneA = ({user_id,mobile_number,otp}) => async (dispatchEvent, getState) => {
    console.log('updatePhoneA', user_id, mobile_number, otp)

    let body = new FormData();
    body.append('user_id', user_id);
    body.append('mobile_number', mobile_number);
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
export default updatePhoneA;
