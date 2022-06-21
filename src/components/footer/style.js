import {StyleSheet, Dimensions} from 'react-native';
import {font} from '../../assets/url/fontSizes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  footerBg: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    borderTopWidth: 1,
    borderColor: '#FFF',
  },
  footBtnBox: {
    padding: 10,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    width: 27,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fIconTitle: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: font.RobotoBold,
    color: '#BCBBBB',
  },
  activeLine: {
    width: 21,
    height: 3,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  lineActive: {
    backgroundColor: '#7DC23B',
  },

  activefIconTitle: {
    color: '#7DC23B',
  },
  fIconTitle:{
    fontSize: 13
  }
});

export default styles;
