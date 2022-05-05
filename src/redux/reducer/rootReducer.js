import {combineReducers} from 'redux';

// Auth
import loginR from './loginR';
import signupR from './SignupR';
import ForgotPasswordR from './ForgotPasswordR';
import VerificationR from './VerificationR';
import ResetPasswordR from './ResetPasswordR';
import ChangePasswordR from './ChangePasswordR';
import profileSettingR from './profileSettingR';
import GetProfileR from './GetProfileR';
import ResendR from "./resendOtpR";
import AvatarsR from "./AvatarsR";
import checkSocialLoginR from "./auth/checkSocialLoginR";
import SubmitEmailR from "./auth/SubmitEmailR";
import updateEmailR from "./auth/updateEmailR";
import editEmailR from "./auth/editEmailR";
import updatePhoneR from "./auth/updatePhoneR";
import editPhoneR from "./auth/editPhoneR";
import phoneOtpR from "./auth/phoneOtpR";
import userDetailsR from "./userDetailsR";
import updateProfileR from "./updateProfileR";
import allStreeksR from "./allStreeksR";
import streekDetailsR from "./streekDetailsR";
import gameDetailsR from "./gameDetailsR";
import recentStreeksR from "./recentStreeksR";
import myStreeks from "./myStreeksR";
import upcomingStreeksR from "./upcomingStreeksR";
import sParticipantR from "./sParticipantR";
import joinStreekR from "./joinStreekR";
import wonStreeksR from "./wonStreeksR";
import lostStreeksR from "./lostStreeksR";
import leaveStreeksR from "./leaveStreeksR";
import validAnswerR from "./validAnswerR";
import contactR from "./contactR";
import userNotificationR from "./userNotificationR";
import transactionHistoryR from "./transactionHistoryR";
import selectAnswerR from "./selectAnswerR";


const rootReducer = combineReducers({
    loginR,
    signupR,
    ForgotPasswordR,
    VerificationR,
    ResetPasswordR,
    ChangePasswordR,
    profileSettingR,
    GetProfileR,
    ResendR,
    AvatarsR,
    checkSocialLoginR,
    SubmitEmailR,
    updateEmailR,
    editEmailR,
    updatePhoneR,
    editPhoneR,
    phoneOtpR,
    userDetailsR,
    updateProfileR,
    allStreeksR,
    streekDetailsR,
    gameDetailsR,
    recentStreeksR,
    myStreeks,
    upcomingStreeksR,
    sParticipantR,
    joinStreekR,
    wonStreeksR,
    lostStreeksR,
    leaveStreeksR,
    validAnswerR,
    contactR,
    userNotificationR,
    transactionHistoryR,
    selectAnswerR

});

export default rootReducer;
