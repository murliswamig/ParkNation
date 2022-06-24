import { invoiceLoading, invoiceSuccess, invoiceError, SUCCESS, ERROR, LOADING, NONE } from '../constants/reduxConstant'

export default function InvoiceR(state = {}, action) {
    switch (action.type) {
        case invoiceLoading:
            return Object.assign({}, state, { status: LOADING });
        case invoiceSuccess:
            return Object.assign({}, state, { status: SUCCESS, value: action.payload });
        case invoiceError:
            return Object.assign({}, state, { status: ERROR, error: action.payload });
        default:
            return Object.assign({}, state, { status: NONE });
    }
}
