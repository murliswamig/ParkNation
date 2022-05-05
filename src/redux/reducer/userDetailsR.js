import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    userDetailError,
    userDetailLoading,
    userDetailSuccess
} from '../constants/reduxConstant'

export default function userDetailsR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case userDetailLoading:
            return Object.assign({}, state, {status: LOADING});
        case userDetailSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case userDetailError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
