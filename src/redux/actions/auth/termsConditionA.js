// import { getService } from '../../../services/getServices'
import { postService } from '../../../services/postServices'
import { termsConditionError, termsConditionSuccess, termsConditionLoading } from '../../constants/reduxConstant'
import apiName from '../../../constants/apiName'


const apiLoading = () => ({ type: termsConditionLoading });
const apiSucceed = payload => ({ type: termsConditionSuccess, payload });
const apiError = payload => ({ type: termsConditionError, payload });


export default termsConditionA = ({policy}) => async (dispatchEvent, getState) => {
    let body = new FormData();
    body.append('slug', 'terms-and-conditions')
    body.append('local', global.language)
    body.append('policy', policy)


    dispatchEvent(apiLoading());
    try {
        postService(apiName.arCms, body)
            .then(async res => {
                if (res.data.status !== 0) {
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
