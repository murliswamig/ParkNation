import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    upcomingStreeksError,
    upcomingStreeksLoading,
    upcomingStreeksSuccess,
} from '../constants/reduxConstant';

export default function upcomingStreeksR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case upcomingStreeksLoading:
            return Object.assign({}, state, {status: LOADING});
        case upcomingStreeksSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case upcomingStreeksError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
