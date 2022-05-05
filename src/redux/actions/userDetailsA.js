import {postService} from '../../services/postServices'
import apiName from '../../constants/apiName'
import {userDetailError, userDetailLoading, userDetailSuccess} from "../constants/reduxConstant";


const apiLoading = () => ({type: userDetailLoading});
const apiSucceed = payload => ({type: userDetailSuccess, payload});
const apiError = payload => ({type: userDetailError, payload});

const userDetailsA = (user_id) => async (dispatchEvent, getState) => {
    console.log('user_id', user_id)

    let body = new FormData();
    body.append('user_id', user_id);

    dispatchEvent(apiLoading());
    try {
        postService(apiName.userDetails, body)
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
export default userDetailsA;
