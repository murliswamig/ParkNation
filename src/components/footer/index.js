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
                <View style={[styles.activeLine, {backgroundColor: name === "home" ? colors.primary : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.home}
                           style={[{tintColor: name === "home" ? colors.primary : 'grey'}]}/>
                </View>
                <Text style={[styles.fIconTitle, {color: name === "home" ? colors.primary : 'grey'}]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('Mobile')}>
                <View style={[styles.activeLine, {backgroundColor: name === "Mobile" ? colors.primary : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.phone}
                           style={[{tintColor: name === "Mobile" ? colors.primary : 'grey'}]}/>
                </View>
                <Text style={[styles.fIconTitle, {color: name === "Mobile" ? colors.primary : 'grey'}]}>Mobile Pass</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('Invoice')}>
                <View style={[styles.activeLine, {backgroundColor: name === "Invoice" ? colors.primary : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.invoice}
                           style={[{tintColor: name === "Invoice" ? colors.primary : 'grey'}]}/>
                </View>
                <Text
                    style={[styles.fIconTitle, {color: name === "Invoice" ? colors.primary : 'grey'}]}>Invoices</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footBtnBox} onPress={() => tabPress('More')}>
                <View style={[styles.activeLine, {backgroundColor: name === "More" ? colors.primary : '#fff'}]}/>
                <View style={styles.iconBox}>
                    <Image source={ImageUrlConstants.more}
                           style={[{tintColor: name === "More" ? colors.primary : 'grey'}]}/>
                </View>
                <Text
                    style={[styles.fIconTitle, {color: name === "More" ? colors.primary : 'grey'}]}>More</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
