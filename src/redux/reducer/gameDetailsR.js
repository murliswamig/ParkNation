import {
    ERROR,
    gameDetailsError,
    gameDetailsLoading,
    gameDetailsSuccess,
    LOADING,
    NONE,
    SUCCESS,
} from '../constants/reduxConstant'

export default function gameDetailsR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case gameDetailsLoading:
            return Object.assign({}, state, {status: LOADING});
        case gameDetailsSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case gameDetailsError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
