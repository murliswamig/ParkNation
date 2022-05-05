import React from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {ImageUrlConstants} from '../../assets/url/imageUrl';
import styles from './style';

const Header = ({label = '', labelStyle = {}, paddingHorizontal = 35, onPress}) => {
    return (
        <View style={styles.headerBg}>
            <TouchableOpacity onPress={onPress} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                <Image source={ImageUrlConstants.backBtn} style={styles.backBtn}/>
            </TouchableOpacity>
            <Text style={styles.screenTitle}>{label}</Text>
        </View>
    );
};

export default Header;
