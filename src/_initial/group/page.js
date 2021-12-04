import { initial_page, initial_user } from '../user/initialUser';

// COMMON
export const initial_group_page = () => {
    return {
        id: 0,
        name: '',
        picture: '',

        color_obj: { bg: '', bg_btn: '', color: '' },
        affiliation_obj: {
            to: 'person' || 'page',
            id: 0,
            name: '',
            picture: '',
        },

        joined: false,
        privacy: '',

        member_arr: [],
        member_count: 0,

        action_name: '',
    };
};

// ABOUT
export const initial_group_page_about = () => {
    return {
        description: '',
        privacy: '',
        visibility: '',
        type_obj: { Icon: null, title: '' },

        member_count: 0,
        created_time: new Date().toString(),
        recommended_count: 0,

        friend_arr: [initial_user(), initial_page()],
        friend_name_str: '',
        admin_arr: [initial_user(), initial_page()],
        admin_name_str: '',

        post_day_count: 0,
        post_month_count: 0,
        member_week_count: 0,
    };
};
