//
export const initial_fb_page_home_preview = () => {
    return {
        info_obj: {
            content: '',
            link_to: '',
            link_title: '',
        },
        like_obj: {
            count: 0,
            friend_arr: [],
            friend_count: 0,
        },
        follow_obj: { count: 0 },
        site_obj: {
            link_to: '',
            link_title: '',
        },
        phone_obj: { num_phone: '' },
    };
};
