//
export const initial_contact_basis_state = () => ({
    gender_obj: {
        gender: '',
        permission: 0,
        title: '',
    },

    lang_obj: {
        lang: '',
        permission: 0,
        title: '',
    },

    birth_obj: {
        birth: '',
        permission: 0,
        title: '',
    },

    //
    email_obj: {
        id: 0,
        title: '',
        email: '',
        permission: 0,
    },

    phone_arr: [
        {
            id: 0,
            title: '',
            phone: '',
            permission: 0,
        },
    ],

    address_arr: [
        {
            id: 0,
            title: '',
            address: '',
            permission: 0,
        },
    ],

    has_fetched: false,
});

//
export const initial_detail_state = () => ({
    you_obj: {
        id: 0,
        title: '',
        you: '',
        permission: 0,
    },

    other_name_arr: [],

    favour_obj: {
        id: 0,
        title: '',
        favour: '',
        permission: 0,
    },

    has_fetched: false,
    no_item: false,
});

//
export const initial_life_state = () => ({
    life_event_arr: [],
    has_fetched: false,
});

//
export const initial_place_state = () => ({
    town_arr: [],
    city_arr: [],
    has_fetched: false,
});

//
export const initial_relation_state = () => ({
    relationship_obj: {
        relationship: '',
        permission: 0,
    },
    family_arr: [],
    has_fetched: false,
});

//
export const initial_work_edu_state = () => ({
    school_arr: [],
    university_arr: [],
    work_arr: [],
    has_fetched: false,
});

//
export const initial_overview_obj = () => ({
    work_arr: [
        {
            name: '',
            permission: 0,
        },
    ],
});
