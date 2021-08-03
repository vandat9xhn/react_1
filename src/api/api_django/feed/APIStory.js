import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import {
    default_story_arr,
    default_story_item_viewer_obj,
    default_story_viewer_arr,
} from '../../../_default/story/DefaultStory';

//
export const API_FeedStory_L = (params = {}) =>
    API_FakeReal(
        default_story_arr(params['story_type']),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/story-lc/',
                method: 'GET',
                params: params,
            }),
        params,
        true
    );

//
export const API_FeedStoryItemViewer_L = (params = {}) =>
    API_FakeReal(
        default_story_viewer_arr(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/story-item-viewer-l/',
                method: 'GET',
                params: params,
            }),
        params
    );

//
export const API_FeedStoryItem_R = (params = {}) =>
    API_FakeReal(default_story_item_viewer_obj(), () =>
        axiosDjangoClient({
            url: 'api/facebook/story-item-r/',
            method: 'GET',
            params: params,
        })
    );
