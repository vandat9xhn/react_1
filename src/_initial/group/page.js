//
export const initial_group_page = () => {
    return {
        id: 0,
        name: '',
        picture: '',

        color_obj: { bg: '', bg_btn: '', color: '' },
        affiliation_obj: {
            to: 'user' || 'page',
            id: 0,
            name: '',
        },

        joined: false,
        privacy: '',

        member_arr: [],
        count_member: 0,

        action_name: '',
    };
};
