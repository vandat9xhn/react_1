import 'regenerator-runtime/runtime';
import Axios from 'axios';
import queryString from 'query-string';
//
import { csrftoken } from '../../_ConstAPI';

//
let is_refreshing = false;

//
const axiosDjangoClient = Axios.create({
    baseURL: process.env.AXIOS_DJANGO,
    headers: {
        Accept: '*/*',
        // 'content-type': 'application/json',
        'Content-Type':
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'X-CSRFToken': csrftoken(),
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

//
export const RefreshToken = () =>
    Axios({
        url: '/log/refresh-token/',
        method: 'POST',
    });

//
export const TokenIsExpired = () => {
    const access_token = localStorage.access_token;
    const time_set = localStorage.time_set || 0;
    const time_now = new Date().getTime();
    const access_life = +localStorage.life_time || 0;
    //
    return time_now - time_set > access_life || !access_token;
};

//
const GetRefreshToken = async () => {
    try {
        const res = await RefreshToken();
        const { access: access_token, life_time } = res.data;

        localStorage.access_token = access_token;
        localStorage.life_time = life_time;
        localStorage.time_set = new Date().getTime();

        return access_token;
    } catch (e) {
        throw e;
    }
};

//
const waitRefreshToken = () =>
    new Promise((res) => {
        let times = 0;

        const interval = setInterval(() => {
            if (!is_refreshing) {
                clearInterval(interval);

                res();
            }

            times++;

            if (times == 10) {
                clearInterval(interval);

                throw new Error('Something went wrong');
            }
        }, 100);
    });

// Axios request: Handle token here
axiosDjangoClient.interceptors.request.use(async (config) => {
    const is_expired = TokenIsExpired();

    if (!is_expired) {
        config.headers.Authorization = `Bearer ${localStorage.access_token}`;

        return config;
    }

    if (!is_refreshing) {
        is_refreshing = true;

        const access_token = await GetRefreshToken();
        config.headers.Authorization = `Bearer ${access_token}`;

        is_refreshing = false

        return config;
    } else {
        await waitRefreshToken();
        config.headers.Authorization = `Bearer ${localStorage.access_token}`;

        return config;
    }
});

// Axios response
axiosDjangoClient.interceptors.response.use(
    // Handle response here
    (response) => {
        //if (response && response.data) {
        //    return response.data;
        //}
        return response;
    },
    (err) => {
        console.log(err);
    }
);

export default axiosDjangoClient;
