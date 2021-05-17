import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { default_login } from '../../../pages/login_form/_default/DefaultLogin';

// login
export const LoginRequest = (data) =>
    API_FakeReal(
        default_login,
        () => axiosClientNoToken({
            url: '/log/login/',
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
            url: '/log/logout/',
        })
    );
