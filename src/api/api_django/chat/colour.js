import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_chat_list_colour_arr } from '../../../_default/chat/colour';

//
export const API_ChatColour_L = (params = {}) =>
    API_FakeReal(
        default_chat_list_colour_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/chat/colour-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
