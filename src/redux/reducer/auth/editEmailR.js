import {
    editEmailError,
    editEmailLoading, editEmailSuccess,
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
} from '../../constants/reduxConstant'

export default function editEmailR(state = {}, action) {
    switch (action.type) {
        case editEmailLoading:
            return Object.assign({}, state, {status: LOADING});
        case editEmailSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case editEmailError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
