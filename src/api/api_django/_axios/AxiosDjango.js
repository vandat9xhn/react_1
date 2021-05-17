import 'regenerator-runtime/runtime';
import Axios from 'axios';
import queryString from 'query-string';
// 
import { csrftoken } from '../../_ConstAPI';

// Create Axios
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


// refresh token
export const RefreshToken = () =>
    Axios({
        url: '/log/refresh-token/',
        method: 'POST',
    });


// token is expired
export const TokenIsExpired = () => {
    const access_token = localStorage.access_token;
    const time_set = localStorage.time_set || 0;
    const time_now = new Date().getTime();
    const access_life = + process.env.ACCESS_LIFE
    // 
    return (time_now - time_set > access_life) || !access_token;
};


//
const GetRefreshToken = async () => {
    try {
        const res = await RefreshToken();
        const access_token = res.data['access'];
        // save to local storage
        localStorage.access_token = access_token;
        localStorage.time_set = new Date().getTime();
        //
        return access_token;
    // 
    } catch (e) {
        throw e
    // 
    } finally {
        localStorage.token_fetching = 0
    }
}

//
const waitRefreshToken = () => new Promise(res => {
    let times_interval = 0
        const fetching_interval = setInterval(() => {
            if (localStorage.token_fetching == 0) {
                clearInterval(fetching_interval)
                res()
            }
            //
            times_interval++
            if (times_interval == 10) {
                clearInterval(fetching_interval)
                throw new Error("Something wrong")
            }
        }, 500);
}) 

// Axios request: Handle token here
axiosDjangoClient.interceptors.request.use(async config => {
    const is_expired = TokenIsExpired();
    // 
    if(!is_expired) {
        config.headers.Authorization = `Bearer ${localStorage.access_token}`;
        return config;
    } 
    // 
    if (localStorage.token_fetching != 1) {
        localStorage.token_fetching = 1
        // 
        const access_token = await GetRefreshToken()
        config.headers.Authorization = `Bearer ${access_token}`;
        return config
    // 
    } else {
        await waitRefreshToken()
        config.headers.Authorization = `Bearer ${localStorage.access_token}`;
        return config
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
        throw err;
    }
);

export default axiosDjangoClient;
