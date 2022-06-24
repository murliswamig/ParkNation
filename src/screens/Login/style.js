import {StyleSheet, Dimensions, Platform} from 'react-native';
import {font} from '../../assets/url/fontSizes';
import colors from "../../constants/colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bg: {
    // width: windowWidth,
    // height: windowHeight,
    backgroundColor: '#fff',
    flex: 1,
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  logoImage: {
    width: 160,
    height: 160,
  },
  formBg: {
    padding: 30,
  },
  formHead: {
    paddingTop: 0,
    paddingVertical: 5,
    alignItems: 'center',
  },
  h1: {
    fontSize: 24,
    color: '#1B1E25',
    paddingBottom: 10,
    fontFamily: font.RobotoBold,
  },
  p: {
    color: '#878787',
    fontSize: 14,
  },
  googleAppleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: Platform.OS === 'ios' ? 'space-between' :'center',
  },
  btnImg: {
    width: 150,
    height: 56,
  },
  formFild: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    color: '#1F1F1F',
    fontFamily: font.RobotoMedium,
    //marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333',
  },
  rememberForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 14,
    color: '#1F1F1F',
    paddingLeft: 10,
  },
  forgotText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: font.RobotoRegular,
  },
  btnBg: {
    borderRadius: 5,
    marginVertical: 15,
  },
  btnText: {
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: font.RobotoBold,
  },
  formFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  accountText: {
    fontSize: 14,
    color: '#BBBBBB',
  },
  signUpBtn: {
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 14,
    fontFamily: font.RobotoBold,
  },
  connView: {
    marginTop: 22,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  connView1: {
    justifyContent: 'center',
    marginBottom: 30
  },
  connFail:{
    alignSelf: 'flex-start',
    marginLeft: 24,
    fontSize: 20,
    fontWeight: '600',
  },
  try:{
    alignSelf: 'flex-start',
    marginLeft: 24,
    marginTop: 16,
    marginBottom: 24,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
