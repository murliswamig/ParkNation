import {
    ERROR,
    LOADING,
    NONE,
    SUCCESS,
    termsConditionError,
    termsConditionLoading,
    termsConditionSuccess
} from '../../constants/reduxConstant'

export default function termsConditionR(state = {}, action) {
    switch (action.type) {
        case termsConditionLoading:
            return Object.assign({}, state, {status: LOADING});
        case termsConditionSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case termsConditionError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
