import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal, csrftoken } from '../../_ConstAPI';
import { default_login } from '../../../pages/login_form/_default/DefaultLogin';

// registration
export const SignupRequest = (data) =>
    API_FakeReal(
        default_login,
        axiosClientNoToken({
            method: 'POST',
            data: data,
            url: '/registration/sign-up/',
            headers: { 'X-CSRFToken': csrftoken() },
        })
    );
