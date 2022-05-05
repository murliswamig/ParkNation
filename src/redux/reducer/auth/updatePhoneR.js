import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    updatePhoneError,
    updatePhoneLoading,
    updatePhoneSuccess,
} from '../../constants/reduxConstant'

export default function updatePhoneR(state = {}, action) {
    switch (action.type) {
        case updatePhoneLoading:
            return Object.assign({}, state, {status: LOADING});
        case updatePhoneSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case updatePhoneError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
