import {
    ERROR,
    LOADING,
    NONE,
    submitEmailError,
    submitEmailLoading,
    submitEmailSuccess,
    SUCCESS,
} from '../../constants/reduxConstant'

export default function SubmitEmailR(state = {}, action) {
    switch (action.type) {
        case submitEmailLoading:
            return Object.assign({}, state, {status: LOADING});
        case submitEmailSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case submitEmailError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
