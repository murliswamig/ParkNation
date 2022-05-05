import {
    ERROR,
    LOADING,
    NONE, streekDetailError, streekDetailLoading, streekDetailSuccess,
    SUCCESS,
} from '../constants/reduxConstant'

export default function streekDetailsR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case streekDetailLoading:
            return Object.assign({}, state, {status: LOADING});
        case streekDetailSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case streekDetailError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
