import React,{useEffect, useState} from 'react';
import {Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View,} from 'react-native';
import Header from '../../components/header';
import styles from './style';
import TextInput from "../../components/TextInput";
import validate from "../../components/validation/validate_wrapper";
import {connect} from "react-redux";
import {LOADING, SUCCESS} from "../../redux/constants/reduxConstant";
import Loader from "../../components/loader";
import {showDangerToast} from "../../components/ToastMessage";
import {ImageUrlConstants} from "../../assets/url/imageUrl";
import colors from "../../constants/colors";
import AppButton from "../../components/AppButton";

const ForgotPassword = (props) => {
  const [isSelected, setSelection] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const forgotPasswordPath = props.forgotRes.ForgotPasswordR;
    if(forgotPasswordPath.status===LOADING){
      setLoading(true)
    }else if(forgotPasswordPath.status===SUCCESS){
      console.log("forgotPasswordPath SUCCESS",forgotPasswordPath)
      setLoading(false);
      if(forgotPasswordPath.value.data.status==="error"){
        console.log("error",forgotPasswordPath.value.data.message)
        setLoading(false);
        showDangerToast(forgotPasswordPath.value.data.message)
      }else if(forgotPasswordPath.value.data.status==="success"){
        props.navigation.navigate('Verification',{email:Email,type:'forgot'})
        console.log("error",forgotPasswordPath.value)
        setLoading(false);
      }
      console.log("forgotPasswordPath",forgotPasswordPath)
    }
  },[props.forgotRes]);



  const checkValidation = () => {
    var emailReq = validate('email', Email);
    if (emailReq) {
      setEmailError(emailReq);
      return false;
    } else {
      return true;
    }
  };


  const forgetPassword =()=> {
    setEmailError('');
    if (!checkValidation()) {
      console.log('error in validation');
      return;
    }
      props.forgotRequest(Email);
  }


  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' hidden={false}/>
      <Header label="Forgot Password" onPress={()=>props.navigation.goBack()}/>
      <Loader loading={loading} />
      <ScrollView>
        <View style={styles.loginBg}>
          <View style={styles.formBg}>
            <View style={styles.formContentBox}>
              <View style={styles.geraphicBox}>
                <Image
                  source={ImageUrlConstants.forgotIcon}
                  style={styles.forgotIcon}
                />
                <Text style={styles.geraphicDes}>
                  Please enter your Email address to receive a four-digit
                  verification code.
                </Text>
              </View>

              <View style={styles.formFild}>
                <TextInput
                    error={emailError}
                    isPlaceHolder={true}
                    autoCapitalize={'none'}
                    placeholder={'Email ID'}
                    keyboardType={'email-address'}
                    maxLength={500}
                    isLevelShow={true}
                    level={'Email ID'}
                    inputStyle={styles.input}
                    value={Email}
                    onChangeText={prev => {
                      setEmail(prev === '' ? prev : prev.trim());
                    }}
                />
              </View>
              <AppButton text={'Next'}  onPress={() => {
                forgetPassword()
                //props.navigation.navigate('ResetPassword');
              }}/>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    forgotRes: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
