import axios from 'axios';
import {BASEURL } from '../constants/apiName';


//***** common function for get services */
export const getService = async (urlAction, getParams) => {
  let ServiceUrl = BASEURL + urlAction;
  console.log('ServiceUrl', ServiceUrl);
  let token = global.token === undefined ? '' : global.token;
  // console.log('Token == Get', global.token);

  let headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    // Token: Token,
  };

  return new Promise(function (resolve, reject) {
    axios({
      method: 'get',
      url: ServiceUrl,
      timeout: 1000 * 60,
      params: getParams,
      headers: headers,
    })
      .then(async (reponse) => {
        console.log(ServiceUrl,"reponse",reponse)
        resolve(reponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
