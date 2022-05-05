import {StyleSheet, Dimensions} from 'react-native';
import {font} from '../../assets/url/fontSizes';
import colors from "../../constants/colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bg: {
    flex:1,
    backgroundColor: '#fff',
  },
  formBg: {
    padding: 30,
  },
  formFild: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    color: '#1F1F1F',
    fontFamily: font.RobotoMedium,
    marginBottom: 5,
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
  geraphicBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  forgotIcon: {
    width: 145,
    height: 103,
    tintColor:colors.primary
  },
  geraphicDes: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#878787',
    textAlign: 'center',
    paddingTop: 35,
    lineHeight: 24,
  },
});

export default styles;
