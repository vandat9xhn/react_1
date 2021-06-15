//
export const initial_chat_current = () =>
    JSON.parse(
        JSON.stringify({
            chat_obj: {
                is_active: false,
                is_hide: false,
                more_input: false,
                show_preview: false,
                user_input: false,
                num_input: 0,
                // on_input: false,
            },

            zoom_obj: {
                zoom_chat: '',
                zoom_active: false,
                zoom_users: [],
                count_user: 0,
                zoom_owner: {},
                zoom_creator: {},
            },

            group_obj: {
                is_group: false,
                show_action_group: false,
            },

            message_obj: {
                messages: [],
                count_message: 0,
                user_begin_mess: 0,
            },

            scroll_obj: {
                just_scroll: false,
                scroll_top: 0,
                current_scroll: 0,
                fetching_message: false,
            },

            canvas_obj: {
                current_canvas: '',
                list_canvas: [''],
                c_step: 0,
                bg: '#ffffff',
                color: '#000000',
                stroke_width: 1,
            },

            input_obj: {
                urls: [],
                files: [],
                file_reading: false,
            },

            actions_obj: {
                type: '',
                like: {
                    mess_id: -1,
                    user_like: -1,
                    is_fetching: false,
                },
                edit: {
                    mess_id: -1,
                    is_fetching: false,
                },
                user_liked: {
                    mess_id: -1,
                    count: 0,
                    data_arr: [],
                    is_fetching: false,
                },
                add_user: {
                    count: 0,
                    data_arr: [],
                    is_fetching: false,
                },
                time_line: {
                    count: 0,
                    data_arr: [],
                    is_fetching: false,
                },
            },
        })
    );
