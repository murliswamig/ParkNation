import {
    ERROR,
    joinStreeksError,
    joinStreeksLoading,
    joinStreeksSuccess,
    LOADING,
    NONE,
    SUCCESS,
} from '../constants/reduxConstant';

export default function joinStreekR(state = {}, action) {
    switch (action.type) {
        case joinStreeksLoading:
            return Object.assign({}, state, {status: LOADING});
        case joinStreeksSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case joinStreeksError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
