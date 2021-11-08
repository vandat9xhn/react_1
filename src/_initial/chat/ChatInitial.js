//
export const initial_chat_item = () => ({
    room_chat: '',

    is_group: false,
    colour_arr: [''],
    emoji: { name: '' },

    texting_obj: {
        user_input: false,
        num_input: 0,
    },

    room_obj: {
        room_active: false,
        room_users: [],
        count_user: 0,
        room_owner: {},
        room_creator: {},
    },

    message_obj: {
        messages: [],
        count_message: 0,
        user_begin_mess: 0,
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
        text: '',
        urls: [],
        files: [],
        file_reading: false,
    },
});
