import LinearGradient from "react-native-linear-gradient";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {font} from "../assets/url/fontSizes";

const AppButton = ({onPress, text, textStyle}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['#156396', '#156396']}
                style={styles.linearGradient}>
                <Text style={[{
                    height: 50,
                    lineHeight: 50,
                    textAlign: 'center',
                    fontSize: 16,
                    color: '#FFFFFF',
                    fontFamily: font.RobotoBold,
                }, textStyle]}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    }
});

export default AppButton;
