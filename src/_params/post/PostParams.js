
const default_size = 10

/* ---------------------- POST --------------------- */

// 
export const params_post_update = {
    'posts[]': ['content', 'vid_pics'],
    'vid_pics[]': ['id', 'vid_pic', 'content']
}

// 
export const params_more_content_post = {
    'posts[]': ['content_obj'],
    'more_content': 1,
}

// 
export const params_like_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_share_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_history_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_more_content_history_post = {
    'his_posts[]': ['content_obj'],
    'content_more': 1,
}

/* ---------------------- CMT --------------------- */

// 
export const params_cmt_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_cmt_post_more_content = {
    'comments[]': ['content_obj'],
    'more_content': 1,
}

// 
export const params_like_cmt_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_history_cmt_post_l = {
    page: 1,
    size: default_size,
}

/* ---------------------- SUB --------------------- */

// 
export const params_sub_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_sub_post_more_content = {
    'subs[]': ['content_obj'],
    'more_content': 1,
}

// 
export const params_like_sub_post_l = {
    page: 1,
    size: default_size,
}

// 
export const params_history_sub_post_l = {
    page: 1,
    size: default_size,
}


/* ---------------------- VID PIC --------------------- */

export const params_id_vid_pic_post_l = {
    
}

export const params_vid_pic_post_r = {

}

export const params_vid_pic_content_post_r = {

}

export const params_vid_pic_like_post_l = {
    page: 1,
    size: default_size,
}

export const params_history_vid_pic_post_l = {
    page: 1,
    size: default_size,
}
