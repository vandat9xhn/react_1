import { API_FakeReal } from '../../_ConstAPI';
import axiosClientNoToken from '../_axios/AxiosNoToken';
// 
import { default_define_user } from '../../../_default/login/DefaultLogin';

// 
export const DefineUser = () =>
    API_FakeReal(
        default_define_user,
        () => axiosClientNoToken({
            url: 'api/account/define-user/',
            method: 'GET',
        })
    );
