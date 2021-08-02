import { initial_user } from '../user/initialUser';

//
export const initial_story_obj = () => ({
    user: initial_user(),
    list: [
        {
            id: 0,
            vid_pic: '',
            created_time: '0' || 0,

            text: '',
            top_text: '',
            left_text: '',
            color_text_ix: 0,
            scale_text: 1,
        },
    ],
    count_new: 0,
    count: 0,
});

//
export const initial_story_menu_obj = () => ({
    user: initial_user(),
    list: [
        {
            id: 0,
            vid_pic: '',
            created_time: '0' || 0,

            text: '',
            top_text: '',
            left_text: '',
            color_text_ix: 0,
            scale_text: 1,
        },
    ],
    count_new: 0,
    count: 0,

    active_step: 0,
    active_item_ix: 0,
});
