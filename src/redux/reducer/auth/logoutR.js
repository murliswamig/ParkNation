import {
    ERROR,
    LOADING,
    logoutError,
    logoutLoading,
    logoutSuccess,
    NONE,
    SUCCESS
} from '../../constants/reduxConstant'

export default function logoutR(state = {}, action) {
    // console.log("Inside logout reducer", action)
    switch (action.type) {
        case logoutLoading:
            return Object.assign({}, state, {status: LOADING});
        case logoutSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case logoutError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
