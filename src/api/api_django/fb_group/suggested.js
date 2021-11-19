import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_suggested_arr } from '../../../_default/fb_group/suggested';

//
export const API_FbGroupSuggested_L = (params) =>
    API_FakeReal(
        default_fb_group_suggested_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-group-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
