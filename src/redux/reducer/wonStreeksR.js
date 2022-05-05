import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    wonStreeksError,
    wonStreeksLoading,
    wonStreeksSuccess
} from '../constants/reduxConstant'

export default function wonStreeksR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case wonStreeksLoading:
            return Object.assign({}, state, {status: LOADING});
        case wonStreeksSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case wonStreeksError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
