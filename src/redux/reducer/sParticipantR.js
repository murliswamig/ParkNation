import {
    ERROR,
    LOADING,
    NONE,
    streekDetailError,
    streekDetailLoading,
    streekDetailSuccess, streekParticipantError,
    streekParticipantLoading,
    streekParticipantSuccess,
    SUCCESS,
} from '../constants/reduxConstant'

export default function sParticipantR(state = {}, action) {
    // console.log("Inside apiReducer.js", action)
    switch (action.type) {
        case streekParticipantLoading:
            return Object.assign({}, state, {status: LOADING});
        case streekParticipantSuccess:
            return Object.assign({}, state, {status: SUCCESS, value: action.payload});
        case streekParticipantError:
            return Object.assign({}, state, {status: ERROR, error: action.payload});
        default:
            return Object.assign({}, state, {status: NONE});
    }
}
