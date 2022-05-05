import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    validAnswerError,
    validAnswerLoading,
    validAnswerSuccess
} from '../constants/reduxConstant'

export default function validAnswerR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case validAnswerLoading:
            return Object.assign({}, state, {status: LOADING});
        case validAnswerSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case validAnswerError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
