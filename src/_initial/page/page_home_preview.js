//
export const initial_fb_page_home_preview = () => {
    // 
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

        pic_arr: [''],
        video_obj: {
            id: 0,
            content: '',
            thumbnail: '',
            video_time: '',

            view_count: 0,
            created_time_str: '',

            reacted_ix_arr: [0],
            reacted_count: 0,
            user_reacted_ix: -1,
            reacted_count_arr: [{ reacted_ix: 0, count: 0 }],
        },
    };
};
