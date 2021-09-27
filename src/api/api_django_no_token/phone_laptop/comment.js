import axiosClientNoToken from '../_axios/AxiosNoToken';
//
import { API_FakeReal } from '../../_ConstAPI';
// 
import { default_pl_detail_comment_arr } from '../../../_default/phone/comment';
//


// 
export const API_PLComment_L = (params = {}) =>
    API_FakeReal(
        default_pl_detail_comment_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/phone/comment-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
