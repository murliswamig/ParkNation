import {postService} from '../../../services/postServices'
import {loginError, loginLoading, loginSuccess} from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiLoading = () => ({type: loginLoading});
const apiSucceed = payload => ({type: loginSuccess, payload});
const apiError = payload => ({type: loginError, payload});


export default loginA = (email, password) => async (dispatchEvent, getState) => {
        console.log("email is",email,"password is",password)
    dispatchEvent(apiLoading());
    try {
        postService(apiName.login, {'name':email,'password':password})
            .then(async res => {
                const respo=JSON.parse(res.data);
                console.log("API RES",respo)
                if (respo.message === 'Login Successful') {
                    dispatchEvent(apiSucceed(respo));
                } else {
                    dispatchEvent(apiError(respo.message));
                }
            })
            .catch(error => {
                dispatchEvent(apiError(error));
            });
    } catch (e) {
        dispatchEvent(apiError(e));
    }
};
