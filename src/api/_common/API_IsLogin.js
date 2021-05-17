import axiosDjangoClient from '../api_django/_axios/AxiosDjango';
import axiosClientNoToken from '../api_django_no_token/_axios/AxiosNoToken';
// 
import { is_api_fake } from '../_ConstAPI';

//
export function API_IsLogin(conf_token = {}, conf_no_token = {}) {
    return localStorage.is_login && !is_api_fake
        ? axiosDjangoClient(conf_token)
        : axiosClientNoToken(conf_no_token);
}

//
export function API_IsLogin_URL(
    config = {},
    url_token = '',
    url_no_token = ''
) {
    return API_IsLogin(
        { ...config, url: url_token },
        { ...config, url: url_no_token }
    );
}
