import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_topic_arr } from '../../../_default/fb_group/topics';

//
export const API_FbGroupTopic_L = (params) =>
    API_FakeReal(
        default_fb_group_topic_arr({ size: params['size'] }),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/group-topic-l/',
                method: 'GET',
                params: params,
            }),
        params,
    );
