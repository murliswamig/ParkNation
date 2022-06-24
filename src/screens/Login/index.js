import React, { useEffect, useState } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { ImageUrlConstants } from '../../assets/url/imageUrl';
import styles from './style';
import validate from "../../components/validation/validate_wrapper";
import TextInput from "../../components/TextInput";

import { ERROR, LOADING, SUCCESS } from "../../redux/constants/reduxConstant";
import { showDangerToast, showToast } from "../../components/ToastMessage";
import Loader from "../../components/loader";
import { AuthContext } from "../../context/AuthContext";
import colors from "../../constants/colors";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import AppButton from "../../components/AppButton";
import loginA from "../../redux/actions/auth/loginA";

const configurationObject = {
    url: 'https://api.parknation.org/reactlogin',
    method: "POST",
    data: {'name':'nandu@parknation.org','password':'test'},
};

const Login = (props) => {

    const [state, setState] = useState({
        loading: false,
    });

    const [isSelected, setSelection] = useState(false);
    const [email, setEmail] = useState('nandu@parknation.org');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('test');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = React.useContext(AuthContext);

    useEffect(() => {
        const unsubscribeOnBlur = props.navigation.addListener('blur', () => {
            clearError();
        });
        return unsubscribeOnBlur;
    }, []);

    useEffect(() => {
        const loginRes = props.loginRes.loginR;
        const checkSoPath = props.loginRes.checkSocialLoginR;
        const updateProfilePath = props.loginRes.updateProfileR;
         console.log("loginRes update",loginRes)
        if (loginRes.status === LOADING) {
            setLoading(true)
        } else if (loginRes.status === SUCCESS) {
            console.log('the response of login is ', loginRes.value)
            setState({ ...state, loading: false });
            setLoading(false);
            state.loading = false;
            showToast(loginRes.value.message);           
            login(loginRes.value)
        } else if (loginRes.status === ERROR) {
            setLoading(false);
            state.loading = false;
            console.log('login error message', loginRes.error);
            showDangerToast(loginRes.error)
        }

    }, [props.loginRes]);


    const checkValidation = () => {
        console.log("email", email)
        var emailReq = validate('email', email);
        //var passwordReq = validate('password', password);
        console.log("email error", emailReq)
       // console.log("passwordReq", passwordReq)
        if (emailReq || '') {
            setEmailError(emailReq);
           // setPasswordError(passwordReq);
            return false;
        } else {
            return true;
        }
    };
    const clearError = () => {
        setEmailError('');
        setPasswordError('');
    }


    const loginButtonPressed = async () => {
        clearError()
        if (!checkValidation()) {
            return;
        }
        props.loginRequest(email, password);
    }




    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar backgroundColor={colors.sBlack} barStyle='light-content' hidden={false} />
            <Loader loading={loading} />
            <KeyboardAwareScrollView>
                <View>
                    <View style={styles.logoBox}>
                        <Image source={ImageUrlConstants.truck} style={styles.logoImage} />
                    </View>
                    <View style={styles.formBg}>
                        <View style={styles.formHead}>
                            <Text style={styles.h1}>Log in</Text>
                            <Text style={styles.p}>
                                Log in with one of the following options.
                            </Text>
                        </View>

                        <View style={styles.formContentBox}>
                            <View style={styles.formFild}>
                                <TextInput
                                    error={emailError}
                                    maxLength={500}
                                    isLevelShow={true}
                                    level={'Email ID'}
                                    keyboardType={'email-address'}
                                    inputStyle={styles.input}
                                    isPlaceHolder={true}
                                    onChangeText={prev => {
                                        setEmail(prev === '' ? prev : prev.trim());
                                    }}
                                    placeholder="Enter your Email"
                                    value={email}
                                />
                            </View>

                            <View style={styles.formFild}>
                                <TextInput
                                    error={passwordError}
                                    inputStyle={styles.input}
                                    isLevelShow={true}
                                    level={'Password'}
                                    isPlaceHolder={true}
                                    placeholder="Enter your password"
                                    secureTextEntry={true}
                                    onChangeText={prev => {
                                        setPassword(prev === '' ? prev : prev.trim());
                                    }}
                                    value={password}
                                />
                            </View>

                            <View style={styles.rememberForgot}>
                                <View>
                                    <TouchableOpacity
                                        style={{ flexDirection: 'row', alignItems: 'center' }}
                                        onPress={() => {
                                            console.log(isSelected)
                                            setSelection(prevState => !prevState);
                                        }}>
                                        <Image
                                            source={isSelected ? ImageUrlConstants.greenCheck : ImageUrlConstants.clock}

                                            style={[
                                                {
                                                    width: 20,
                                                    height: 20,
                                                    borderWidth: isSelected ? 0 : 2,
                                                    borderColor: '#E3E3E3',
                                                    borderRadius: 0,
                                                    tintColor:isSelected?colors.primary:null
                                                },
                                            ]}
                                        />
                                        <Text style={styles.rememberText}>{'Remember me'}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text
                                        style={styles.forgotText}
                                        onPress={() => {
                                            console.log("props are ---", props)
                                            props.navigation.navigate('ForgotPassword')
                                        }}>
                                        Forgot Password?
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginVertical: 15}}>
                                <AppButton text={'Log in'} onPress={loginButtonPressed}/>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        loginRes: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (email, password) => {
            console.log("api data",email, password)
            dispatch(loginA(email, password));
        },
        checkSocialLoginRequest: (type, social_id,name,email,device_id,device_type) => {
            //dispatch(checkSocialLoginA(type, social_id,name,email,device_id,device_type));
        },
        updateProfileRequest: (user_id,first_name, last_name, username) => {
            //dispatch(updateProfileA(user_id,first_name, last_name, username));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
