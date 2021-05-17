import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';
// 
import { default_login } from '../../../pages/login_form/_default/DefaultLogin';

// 
export const DefineUser = () =>
    API_FakeReal(
        default_login,
        () => axiosClientNoToken({
            url: '/log/define-user/',
            method: 'GET',
        })
    );
