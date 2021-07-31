import 'regenerator-runtime';
import axios from 'axios';
import queryString from 'query-string';
//
import { baseURL, csrftoken } from '../../_ConstAPI';

axios.defaults.baseURL = baseURL;

//
const axiosClientNoToken = axios.create({
    // baseURL: is_api_fake ? process.env.AXIOS_DJANGO : process.env.HEROKU_API,
    withCredentials: true,
    headers: {
        Accept: '*/*',
        // 'content-type': 'application/json',
        'Content-Type':
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'X-CSRFToken': csrftoken(),
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientNoToken.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        console.log(err);
    }
);

export default axiosClientNoToken;
