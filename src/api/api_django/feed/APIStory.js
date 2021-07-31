import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_story_arr } from '../../../_default/feed/DefaultStory';

//
export const API_FeedStory_L = (params = {}) =>
    API_FakeReal(
        default_story_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/story-lc/',
                method: 'GET',
                params: params,
            }),
        params
    );
