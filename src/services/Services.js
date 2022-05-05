import axios from 'axios';
const Buffer = require('buffer').Buffer;

export  const Services = { getPost };
function getPost(methodName, formData, imageNames, setUploadPercentage) {
  const promise = new Promise((resolve, reject) => {
    var formValues = new FormData();
    let apiFinalUrl = 'https://idea.devtechnosys.info/api/index';
    // let apiFinalUrl = 'http://192.168.1.159:8002/api/index';
    // http://192.168.1.159:8002/api/index
    

    const encodedData = Buffer.from(
      JSON.stringify({
        debug: 1,
        device_type: 'android',
        device_id:
          'eBHxf6V-RNmIgTWV43AUGk:APA91bFJVRJt4qRSEP-hE58s3oRAlrhbQC4F09LyVezrHr1Lugh1Ke7_pUfp0kW1q4c-SwXLKbP6Oo_3TdU6rZYrIuJjUwgDa-7XA686aad210xdDXHfJEhvaPJmwrFJHZp3NoT9bcqc',
        device_token:
          'eBHxf6V-RNmIgTWV43AUGk:APA91bFJVRJt4qRSEP-hE58s3oRAlrhbQC4F09LyVezrHr1Lugh1Ke7_pUfp0kW1q4c-SwXLKbP6Oo_3TdU6rZYrIuJjUwgDa-7XA686aad210xdDXHfJEhvaPJmwrFJHZp3NoT9bcqc',
        api_referrer: 'mobile',
        method_name: methodName,
        data: formData,
      }),
    ).toString('base64');
    console.log(encodedData);
    formValues.append('req', encodedData);
    if (imageNames) {
      Object.keys(imageNames).forEach(function (key) {
        formValues.append(key, imageNames[key]);
      });
    }

    //  formValues.append('image', imageNames);

    console.log('form values  ===  ', formValues);

    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
      },
      onUploadProgress: progressEvent => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        if (setUploadPercentage) {
          setUploadPercentage(precentage);
        }
        // if (precentage < 100) {
        //   console.log(precentage,"precentageprecentageprecentageprecentageprecentage");
        // }
      },
    };

    axios
      .post(apiFinalUrl, formValues, options)
      .then(response => {
        console.log(response, " o coming")

        if (response.status == 200) {
          return resolve(
            Buffer.from(response.data, 'base64').toString('ascii'),
          );
        }
      })
      .catch(error => {
        console.log(error);
        return reject({
          status: 'error',
          message: 'Something went wrong!!',
        });
      });
  });
  return promise;
}
