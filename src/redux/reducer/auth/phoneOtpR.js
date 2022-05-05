import {
    ERROR,
    LOADING,
    NONE,
    phoneOtpError,
    phoneOtpLoading,
    phoneOtpSuccess,
    SUCCESS,
} from '../../constants/reduxConstant'

export default function phoneOtpR(state = {}, action) {
    switch (action.type) {
        case phoneOtpLoading:
            return Object.assign({}, state, {status: LOADING});
        case phoneOtpSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case phoneOtpError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
