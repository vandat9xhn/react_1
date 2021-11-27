//
export const initial_page_preview = () => {
    return {
        id: 0,
        name: '',
        picture: '',

        following_count: 0,
        like_count: 0,
        has_followed: false,
        has_liked: false,

        type: '',
        description: '',
        web_link: '',
        phone: '',

        action_case_arr: [],
    };
};
