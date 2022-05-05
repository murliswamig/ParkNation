import {
    ERROR,
    LOADING,
    avatarLoading,
    avatarError,
    avatarSuccess,
    NONE,
    SUCCESS
} from '../constants/reduxConstant'

export default function AvatarsR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case avatarLoading:
            return Object.assign({}, state, {status: LOADING});
        case avatarSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case avatarError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
