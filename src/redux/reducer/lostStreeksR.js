import {
    ERROR,
    LOADING,
    lostStreeksError,
    lostStreeksLoading,
    lostStreeksSuccess,
    NONE,
    SUCCESS
} from '../constants/reduxConstant'

export default function lostStreeksR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case lostStreeksLoading:
            return Object.assign({}, state, {status: LOADING});
        case lostStreeksSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case lostStreeksError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
