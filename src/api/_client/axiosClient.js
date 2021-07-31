import 'regenerator-runtime/runtime';
import axios from 'axios';
import queryString from 'query-string';
//
import { csrftoken, is_api_fake } from '../_ConstAPI';

//
const axiosClient = () => axios
    // axios.create({
    //     baseURL: is_api_fake
    //         ? process.env.AXIOS_DJANGO
    //         : process.env.HEROKU_API,
    //     headers: {
    //         Accept: '*/*',
    //         // 'content-type': 'application/json',
    //         'Content-Type':
    //             'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    //         'X-CSRFToken': csrftoken(),
    //     },
    //     paramsSerializer: (params) => queryString.stringify(params),
    // });

export default axiosClient;
