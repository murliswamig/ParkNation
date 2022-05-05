import {StyleSheet, Dimensions} from 'react-native';
import {font} from '../../assets/url/fontSizes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerBg: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: 'center',
  },
  backBtn:{
    width:10,
    height:16,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: font.RobotoBold,
    paddingLeft: 15,
  },
  screenTitle:{
    fontSize:18,
    color:'#1B1E25',
    fontFamily:font.RobotoRegular,
    paddingLeft:20,
  },



});

export default styles;
