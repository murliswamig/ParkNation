import {postService} from '../../../services/postServices'
import {editEmailError, editEmailLoading, editEmailSuccess} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({type: editEmailLoading});
const apiSucceed = payload => ({type: editEmailSuccess, payload});
const apiError = payload => ({type: editEmailError, payload});

const editEmailA = ({user_id,email}) => async (dispatchEvent, getState) => {
    console.log('editEmailA', user_id, email)

    let body = new FormData();
    body.append('user_id', user_id);
    body.append('email', email);

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
export default editEmailA;
