import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_joined_arr } from '../../../_default/fb_group/joined';
import { getRandomBool } from '../../../_default/_common/default_bool';
import { getRandomNumber } from '../../../_default/_common/default_id';

//
export const API_GroupManage_L = (params) =>
    API_FakeReal(
        default_fb_group_joined_arr({ pinned: false }).slice(
            0,
            getRandomBool() ? getRandomNumber(0, 2) : 0
        ),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-joined-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
