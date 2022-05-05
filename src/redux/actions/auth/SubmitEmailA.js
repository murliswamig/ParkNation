import {postService} from '../../../services/postServices'
import {submitEmailError, submitEmailLoading, submitEmailSuccess} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({type: submitEmailLoading});
const apiSucceed = payload => ({type: submitEmailSuccess, payload});
const apiError = payload => ({type: submitEmailError, payload});


const SubmitEmailA = ({user_id,email}) => async (dispatchEvent, getState) => {
    let body = new FormData();
    body.append('user_id', user_id)
    body.append('email', email)

    dispatchEvent(apiLoading());
    try {
        postService(apiName.editEmail, body)
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

export default SubmitEmailA;
