import {
    ERROR,
    leaveStreeksError,
    leaveStreeksLoading,
    leaveStreeksSuccess,
    LOADING,
    NONE,
    SUCCESS,
} from '../constants/reduxConstant';

export default function leaveStreeksR(state = {}, action) {
    switch (action.type) {
        case leaveStreeksLoading:
            return Object.assign({}, state, {status: LOADING});
        case leaveStreeksSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case leaveStreeksError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
