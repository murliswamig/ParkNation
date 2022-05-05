import { postService } from '../../../services/postServices'
import { checkSocialLoginError, checkSocialLoginSuccess, checkSocialLoginLoading } from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({ type: checkSocialLoginLoading });
const apiSucceed = payload => ({ type: checkSocialLoginSuccess, payload });
const apiError = payload => ({ type: checkSocialLoginError, payload });


export default checkSocialLoginA = (type, social_id,name,email,device_id,device_type) => async (dispatchEvent, getState) => {
console.log("---------------------",type, social_id)
    let body = new FormData();
    body.append('type', type)
    body.append('social_id', social_id)
    body.append('device_id', global.fcmToken)
    body.append('device_type', device_type)
    if(type==="google"){
        body.append('name', name)
        body.append('email', email)
    }
    console.log("---------------------checkSocialLoginA",body)
    dispatchEvent(apiLoading());
    try {
        postService(apiName.socialLogin, body)
            .then(async res => {
                console.log("oooooo res",res.data)
                if (res.data.status === "success") {
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
