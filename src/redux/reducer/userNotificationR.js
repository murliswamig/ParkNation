import {
    ERROR,
    LOADING,
    NONE,
    notificationError,
    notificationLoading,
    notificationSuccess,
    SUCCESS
} from '../constants/reduxConstant'

export default function userNotificationR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case notificationLoading:
            return Object.assign({}, state, {status: LOADING});
        case notificationSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case notificationError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
