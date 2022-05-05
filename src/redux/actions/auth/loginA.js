import {postService} from '../../../services/postServices'
import {loginError, loginLoading, loginSuccess} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({type: loginLoading});
const apiSucceed = payload => ({type: loginSuccess, payload});
const apiError = payload => ({type: loginError, payload});


export default loginA = (email, password, device_type, fcmToken, device_id) => async (dispatchEvent, getState) => {
    let body = new FormData();

    body.append('email', email)
    body.append('password', password)
     body.append('device_type', device_type)
     body.append('device_token', fcmToken)
     body.append('device_id', device_id)
     body.append('fcm_token', fcmToken)

    console.log("LOgin body", body)

    dispatchEvent(apiLoading());
    try {
        postService(apiName.login, body)
            .then(async res => {
                console.log("API RES",res)
                if (res.data.status === 'success') {
                    dispatchEvent(apiSucceed(res.data));
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
