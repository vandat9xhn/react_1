
/* ---------------------- FIELDS --------------------- */
const zoom_fields = [
    'room_chat',
    'is_group',
    'owner',
    'creator',
    'zoom_users',
    'count_user',
    'messages',
    'count_message',
    'count_group_notice',
    // 
    'user_begin_mess',
];
//
const message_fields = [
    'id',
    'message',
    'profile_model',
    'user',
    'zoom_model',
    'created_time',
    'vid_pics',
    'vid_pic_count',
    'count_user_like',
    'arr_distinct_user_like',
];

/* ---------------------- COMMON --------------------- */

// 
export const page_size = {
    page: 1,
    size: 10,
}

// 
const params_zoom_fields = {
    'zooms[]': zoom_fields,
}

// 
const params_message_fields = {
    'messages[]': message_fields,
}

//  vid_pic
const params_vid_pic = {
    vid_pic_page: 1,
    vid_pic_size: 4,
}

/* ---------------------- PARAMS --------------------- */

//
export const params_zoom_r = {
    ...params_zoom_fields,
    ...params_message_fields,
    ...params_vid_pic,
};

//
export const params_message_l = {
    ...params_message_fields,
    ...page_size,
    ...params_vid_pic,
};
