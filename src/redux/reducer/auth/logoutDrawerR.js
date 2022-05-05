import {
    ERROR,
    LOADING,
    logoutDrawerError,
    logoutDrawerLoading,
    logoutDrawerSuccess,
    NONE,
    SUCCESS
} from '../../constants/reduxConstant'

export default function logoutDrawerR(state = {}, action) {
    // console.log("Inside logoutDrawer reducer", action)
    switch (action.type) {
        case logoutDrawerLoading:
            return Object.assign({}, state, {status: LOADING});
        case logoutDrawerSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case logoutDrawerError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
