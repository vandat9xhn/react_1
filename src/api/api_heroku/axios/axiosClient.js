import 'regenerator-runtime/runtime';
import Axios from 'axios';
import queryString from 'query-string';
// 
import { csrftoken } from '../../_ConstAPI';

// Create Axios
const axiosClientHeroku = Axios.create({
    baseURL: process.env.HEROKU_API,
    headers: {
        Accept: '*/*',
        'Content-Type':
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'X-CSRFToken': csrftoken(),
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

// request
axiosClientHeroku.interceptors.request.use(async (config) => {
    // Handle token here
    // config.headers.handle_token = 'my token2';
    return config;
});

// response
axiosClientHeroku.interceptors.response.use(
    // Handle response here
    (response) => {
        // if (response && response.data) {
        //     return response.data;
        // }
        return response;
    },
    (err) => {
        throw err;
    }
);

export default axiosClientHeroku;
