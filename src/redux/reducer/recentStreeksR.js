import {
    SUCCESS,
    ERROR,
    LOADING,
    NONE,
    recentStreeksLoading, recentStreeksSuccess, recentStreeksError
} from '../constants/reduxConstant'

export default function recentStreeksR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case recentStreeksLoading:
            return Object.assign({}, state, { status: LOADING });
        case recentStreeksSuccess:
            return Object.assign({}, state, { status: SUCCESS, value: action.payload });
        case recentStreeksError:
            return Object.assign({}, state, { status: ERROR, error: action.payload });
        default:
            return Object.assign({}, state, { status: NONE });
    }
}
