import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS, allStreekLoading, allStreekSuccess, allStreekError
} from '../constants/reduxConstant'

export default function allStreeksR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case allStreekLoading:
            return Object.assign({}, state, {status: LOADING});
        case allStreekSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case allStreekError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
