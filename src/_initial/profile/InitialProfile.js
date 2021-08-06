//
export const initial_profile = {
    id: 0,
    picture: '',
    cover: '',
    first_name: '',
    last_name: '',

    permission_add_friend: 0,
    user_related: 'c_user',
    is_block_message: 0,

    gender_obj: {
        id: 0,
        gender: '',
        permission: 0,
        profile_model: 0,
    },

    birth_obj: {
        id: 0,
        birth: '',
        permission: 0,
        profile_model: 0,
    },

    lang_obj: {
        id: 0,
        lang: '',
        permission: 0,
        profile_model: 0,
    },

    life_arr: [],

    mail_obj: {
        id: 0,
        mail: '',
        permission: 0,
        profile_model: 0,
    },

    phone_arr: [],
    address_arr: [],
    town_arr: [],
    city_arr: [],

    family_arr: [
        {
            id: 0,
            permission: 0,
            profile_model: 0,
            member: 0,
        },
    ],

    relation_obj: {
        id: 0,
        relation: '',
        permission: 0,
        profile_model: 0,
    },

    work_arr: [],
    school_arr: [],
    university_arr: [],

    hobby_obj: {
        id: 0,
        hobby: '',
        permission: 0,
        profile_model: 0,
    },

    you_obj: {
        id: 0,
        you: '',
        permission: 0,
        profile_model: 0,
    },

    other_name_arr: [],

    is_online: true,
    created_time: '',
};

//
export const initial_friend = () => ({
    id: 0,
    first_name: '',
    last_name: '',
    picture: '',
});
