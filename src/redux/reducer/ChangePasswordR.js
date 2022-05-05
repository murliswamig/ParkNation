import {
    changePasswordError,
    changePasswordLoading,
    changePasswordSuccess,
    ERROR,
    LOADING,
    NONE,
    SUCCESS
} from '../constants/reduxConstant'

export default function ChangePasswordR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case changePasswordLoading:
            return Object.assign({}, state, {status: LOADING});
        case changePasswordSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case changePasswordError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
