import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    updateProfileError,
    updateProfileLoading,
    updateProfileSuccess
} from '../constants/reduxConstant'

export default function updateProfileR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case updateProfileLoading:
            return Object.assign({}, state, {status: LOADING});
        case updateProfileSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case updateProfileError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
