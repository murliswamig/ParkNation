import axios from 'axios';
import { BASEURL, } from '../constants/apiName';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const postApi = async (urlAction, params,token='') => {
    let ServiceUrl = BASEURL + urlAction;
    console.log('ServiceUrl', ServiceUrl,'params',params,'token',token);
    let headers = {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'authorization': `Bearer ${token}`,
    };

    // console.log('in post service the data is ', ServiceUrl, token, headers)
    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: ServiceUrl,
            timeout: 1000 * 60,
            data: params,
            headers: headers,
        })
            .then(async (reponse) => {
                console.log("token---",token,"data reponse---->",ServiceUrl,reponse)
                resolve(reponse);
            })
            .catch((error) => {
                console.log("ServiceUrl",ServiceUrl,"error",error)
                reject(error.message);
            });
    });
};
