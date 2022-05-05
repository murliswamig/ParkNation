import React from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {ImageUrlConstants} from '../../assets/url/imageUrl';
import styles from './style';
import colors from "../../constants/colors";

const Footer = ({name, tabClick}) => {

    const tabPress = (title) => {
        tabClick(title)
    }

    return (
        <View style={styles.footerBg}>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('home')}>
                <View style={[styles.activeLine, {backgroundColor: name === "home" ? '#7DC23B' : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.fIcon2}
                           style={[{tintColor: name === "home" ? colors.primary : 'grey'}]}/>
                </View>
                <Text style={[styles.fIconTitle, {color: name === "home" ? colors.primary : 'grey'}]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('MyStreeks')}>
                <View style={[styles.activeLine, {backgroundColor: name === "MyStreeks" ? '#7DC23B' : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.fIcon2}
                           style={[{tintColor: name === "MyStreeks" ? colors.primary : 'grey'}]}/>
                </View>
                <Text style={[styles.fIconTitle, {color: name === "MyStreeks" ? colors.primary : 'grey'}]}>My
                    Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('RecentHistory')}>
                <View style={[styles.activeLine, {backgroundColor: name === "RecentHistory" ? '#7DC23B' : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.fIcon2}
                           style={[{tintColor: name === "RecentHistory" ? colors.primary : 'grey'}]}/>
                </View>
                <Text
                    style={[styles.fIconTitle, {color: name === "RecentHistory" ? colors.primary : 'grey'}]}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('UpcomingStreek')}>
                <View style={[styles.activeLine, {backgroundColor: name === "UpcomingStreek" ? '#7DC23B' : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.fIcon2}
                           style={[{tintColor: name === "UpcomingStreek" ? colors.primary : 'grey'}]}/>
                </View>
                <Text
                    style={[styles.fIconTitle, {color: name === "UpcomingStreek" ? colors.primary : 'grey'}]}>Setting</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
