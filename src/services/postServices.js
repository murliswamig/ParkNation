import axios from 'axios';
import { BASEURL, } from '../constants/apiName';

export const postService = async (urlAction, params) => {
  let ServiceUrl = BASEURL + urlAction;

   let headers = {
    'Content-Type': 'application/json',
    'Accept':'application/json'
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
        console.log("token---","data reponse---->",ServiceUrl,reponse)
        resolve(reponse);
      })
      .catch((error) => {
        console.log("ServiceUrl",ServiceUrl,"error",error)
        reject(error.message);
      });
  });
};
