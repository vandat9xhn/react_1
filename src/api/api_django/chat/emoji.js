import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_chat_list_emoji_row_arr } from '../../../_default/chat/emoji';

//
export const API_ChatEmoji_L = (params = {}) =>
    API_FakeReal(
        default_chat_list_emoji_row_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/chat/emoji-row-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
