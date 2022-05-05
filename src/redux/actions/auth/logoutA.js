
import { logoutError, logoutSuccess, logoutLoading } from '../../constants/reduxConstant'
import { logoutDrawerError, logoutDrawerSuccess, logoutDrawerLoading } from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'
import {getService} from "../../../services/getServices";


const apiLoading = () => ({ type: logoutLoading });
const apiSucceed = payload => ({ type: logoutSuccess, payload });
const apiError = payload => ({ type: logoutError, payload });



export default logoutA = ({ from }) => async (dispatchEvent, getState) => {
        dispatchEvent(apiLoading());
        try {
            getService(apiName.logout)
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
