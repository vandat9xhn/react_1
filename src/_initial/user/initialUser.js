//
export const initial_user = () => ({
    id: 0,
    first_name: '',
    last_name: '',
    picture: '',
    sex: 'male' || 'female' || 'other',

    time_online: 0,
    has_new_story: false,
});

//
export const initial_page = () => ({
    id: 0,
    name: '',
    picture: '',

    time_online: 0,
    has_tick: false,
    has_new_story: false,
});
