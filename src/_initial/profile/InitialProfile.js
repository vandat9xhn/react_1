//
export const initial_profile = () => {
    return {
        id: 0,
        picture: '',
        cover: '',
        first_name: '',
        last_name: '',

        sent_request: false,
        has_new_story: false,

        friend_count: 0,
        mutual_friend_count: 0,
        friend_arr: [],

        sent_request: false,
        has_new_story: false,

        nick_name: '',
        bio: '',

        friend_arr: [],
        friend_count: 0,
        mutual_friend_arr: [],
        mutual_friend_count: 0,
        has_more_friend: false,

        action_case_arr: [],

        //
        time_to_birth: -1,
        town: '',
        university: '',

        is_online: true,
        created_time: '',
    };
};

//
export const initial_friend = () => ({
    id: 0,
    first_name: '',
    last_name: '',
    picture: '',
});
