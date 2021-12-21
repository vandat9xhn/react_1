//
export const initial_fb_page = () => ({
    name: '',
    picture: '',
    cover: '',
    has_new_story: false,
    has_seen_story: false,

    info_extra_1: { title: '', has_link: false, link_to: '' },
    info_extra_2: { title: '', has_link: false, link_to: '' },

    action_main_arr: [],
    action_arr: [],
    
    has_liked: false,
    has_followed: false,
});
