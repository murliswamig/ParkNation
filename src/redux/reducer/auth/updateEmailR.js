import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    updateEmailError,
    updateEmailLoading,
    updateEmailSuccess,
} from '../../constants/reduxConstant'

export default function updateEmailR(state = {}, action) {
    switch (action.type) {
        case updateEmailLoading:
            return Object.assign({}, state, {status: LOADING});
        case updateEmailSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case updateEmailError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
