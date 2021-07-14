import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal, csrftoken } from '../../_ConstAPI';
import { default_login } from '../../../_default/login/DefaultLogin';

// registration
export const SignupRequest = (data) =>
    API_FakeReal(
        default_login,
        () => axiosClientNoToken({
            method: 'POST',
            data: data,
            url: '/registration/sign-up/',
        })
    );
