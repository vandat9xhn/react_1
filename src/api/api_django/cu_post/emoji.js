import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import {
    default_post_emoji_arr,
    default_post_emoji_type_arr,
} from '../../../_default/post/cu_emoji';

//
export const API_FbEmojiType_L = ({ params = {} }) =>
    API_FakeReal(
        default_post_emoji_type_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/emoji-type-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );

//
export const API_FbEmoji_L = ({ params = {} }) =>
    API_FakeReal(
        default_post_emoji_arr(params['type']),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/emoji-l/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );
