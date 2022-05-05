import {
    ERROR,
    LOADING,
    myStreeksError,
    myStreeksLoading,
    myStreeksSuccess,
    NONE,
    SUCCESS,
} from '../constants/reduxConstant';

export default function myStreeksR(state = {}, action) {
    switch (action.type) {
        case myStreeksLoading:
            return Object.assign({}, state, {status: LOADING});
        case myStreeksSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case myStreeksError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
