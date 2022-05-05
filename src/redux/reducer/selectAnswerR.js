import {
    ERROR,
    LOADING,
    NONE,
    selectAnswerError,
    selectAnswerLoading,
    selectAnswerSuccess,
    SUCCESS
} from '../constants/reduxConstant'

export default function selectAnswerR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case selectAnswerLoading:
            return Object.assign({}, state, {status: LOADING});
        case selectAnswerSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case selectAnswerError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
