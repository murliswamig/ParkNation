import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    transactionError,
    transactionLoading,
    transactionSuccess,
} from '../constants/reduxConstant';

export default function transactionHistoryR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case transactionLoading:
            return Object.assign({}, state, {status: LOADING});
        case transactionSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case transactionError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
