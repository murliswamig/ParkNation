import {postService} from '../../../services/postServices'
import {editPhoneError, editPhoneLoading, editPhoneSuccess} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({type: editPhoneLoading});
const apiSucceed = payload => ({type: editPhoneSuccess, payload});
const apiError = payload => ({type: editPhoneError, payload});

const editPhoneA = ({user_id,mobile_number}) => async (dispatchEvent, getState) => {
    console.log('editPhoneA', user_id, mobile_number)

    let body = new FormData();
    body.append('user_id', user_id);
    body.append('mobile_number', mobile_number);

    dispatchEvent(apiLoading());
    try {
        postService(apiName.editMobileNumber, body)
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
export default editPhoneA;
