import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { default_login } from '../../../_default/login/DefaultLogin';

// login
export const LoginRequest = (data) =>
    API_FakeReal(
        default_login,
        () => axiosClientNoToken({
            url: 'api/account/login/',
            method: 'POST',
            data: data,
        })
    );

// logout
export const LogoutRequest = () =>
    API_FakeReal(
        {},
        () => axiosClientNoToken({
            method: 'GET',
            url: 'api/account/logout/',
        })
    );
