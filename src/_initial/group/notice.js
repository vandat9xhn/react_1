import { initial_user } from '../user/initialUser';

//
export const initial_fb_group_notice_obj = () => {
    return {
        id: 0,
        user: initial_user(),
        group_obj: {
            id: 0,
            name: '',
            picture: '',
        },

        notice_type: '',
        has_seen: false,
        created_time: new Date().toString(),
    };
};
