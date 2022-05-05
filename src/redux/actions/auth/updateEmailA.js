import {postService} from '../../../services/postServices'
import {updateEmailError, updateEmailLoading, updateEmailSuccess} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({type: updateEmailLoading});
const apiSucceed = payload => ({type: updateEmailSuccess, payload});
const apiError = payload => ({type: updateEmailError, payload});

const updateEmailA = ({user_id, email, otp}) => async (dispatchEvent, getState) => {
    console.log('updateEmailA', user_id, email, otp)

    let body = new FormData();
    body.append('user_id', user_id);
    body.append('email', email);
    body.append('otp', otp);


    dispatchEvent(apiLoading());
    try {
        postService(apiName.updateEmail, body)
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
export default updateEmailA;
