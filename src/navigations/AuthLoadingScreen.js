import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import colors from '../constants/colors';
import {font} from '../assets/url/fontSizes';
import {ImageUrlConstants} from '../assets/url/imageUrl';

const sHeight = Dimensions.get('window').height;
const sWidth = Dimensions.get('window').width;

const AuthLoadingScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.subcontainer}>
        <Image source={ImageUrlConstants.truck} style={styles.image} />
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:9,color:'white',marginTop:6}}>THE LEADER IN MULTI-DAY FANTASY SPORTS</Text>
        </View>

        <Text style={styles.text}>Loading ...</Text>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    height: sHeight,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.sBlack,
  },
  subcontainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: { alignSelf: 'center',height:  sWidth * (150 / 375) ,width:sWidth * (160 / 375)  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontFamily: font.RobotoLight,
    fontSize: 15,
    lineHeight: 20,
    marginVertical: 10,
  },
});

export default AuthLoadingScreen;
