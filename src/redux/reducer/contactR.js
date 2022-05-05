import {contactError, contactLoading, contactSuccess, ERROR, LOADING, NONE, SUCCESS} from '../constants/reduxConstant'

export default function contactR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case contactLoading:
            return Object.assign({}, state, {status: LOADING});
        case contactSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case contactError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
