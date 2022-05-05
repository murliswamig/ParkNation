import {
    checkSocialLoginError,
    checkSocialLoginLoading,
    checkSocialLoginSuccess,
    ERROR,
    LOADING,
    NONE,
    SUCCESS
} from '../../constants/reduxConstant'

export default function checkSocialLoginR(state = {}, action) {
    switch (action.type) {
        case checkSocialLoginLoading:
            return Object.assign({}, state, {status: LOADING});
        case checkSocialLoginSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case checkSocialLoginError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
