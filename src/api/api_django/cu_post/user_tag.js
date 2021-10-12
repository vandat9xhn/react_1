import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_post_user_tag_detail_arr } from '../../../_default/post/cu_user_tag';
//

//
export const API_FbUserTagDetail_L = ({ params = {} }) =>
    API_FakeReal(
        default_post_user_tag_detail_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/user-tag-detail-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
