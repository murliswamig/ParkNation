import {
    editPhoneError,
    editPhoneLoading,
    editPhoneSuccess,
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
} from '../../constants/reduxConstant'

export default function editPhoneR(state = {}, action) {
    switch (action.type) {
        case editPhoneLoading:
            return Object.assign({}, state, {status: LOADING});
        case editPhoneSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case editPhoneError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
