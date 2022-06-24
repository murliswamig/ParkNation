import {combineReducers} from 'redux';

// Auth
import loginR from './loginR';
import signupR from './SignupR';
import ForgotPasswordR from './ForgotPasswordR';
import VerificationR from './VerificationR';
import ResetPasswordR from './ResetPasswordR';
import InvoiceR from './InvoiceR';

const rootReducer = combineReducers({
    loginR,
    signupR,
    ForgotPasswordR,
    VerificationR,
    ResetPasswordR,
    InvoiceR
});

export default rootReducer;
