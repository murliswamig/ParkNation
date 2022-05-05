import React, {useLayoutEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Share} from "react-native";
import {getFocusedRouteNameFromRoute, useNavigation, useRoute} from "@react-navigation/native";
import {postService} from "../services/postServices";
import apiName from "../constants/apiName";

export async function getUserDetails() {
    let user = await AsyncStorage.getItem('user');
    return JSON.parse(user);
}

export async function onShare () {
    try {
        const result = await Share.share({
            title: 'App link',
            message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
            url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};

export function getText(html){
    return html.replace(/<[^>]+>/g, '');
}

export default function decimalFormat(dollor) {
    if (dollor) {
        return Number.parseFloat(dollor).toFixed(2)
    }
    return ''
}

export async function userExist(email) {
    console.log("===============================Email",email)
    let isUser=false;
    let body = new FormData();
    body.append('email', email);
    try {
        postService(apiName.userExist,body)
            .then(async res => {
                console.log('**************************',res.data.data)
               return isUser = res.data.data === 1;
            }).catch(error => {
                console.log("err",error)
            });
    } catch (e) {
        console.log("e",e)
    }
    return isUser;
}








