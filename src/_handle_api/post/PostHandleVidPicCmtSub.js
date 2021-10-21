import {
    handle_API_Cmt_C,
    handle_API_Cmt_L,
    handle_API_Cmt_U,
    handle_API_HistoryCmt_L,
    handle_API_LikeCmt_L,
    handle_API_MoreContentCmt_R,
    handle_API_MoreContentHisCmt_R,
} from './HandleAPICmt';
//
import {
    handle_API_HistorySub_L,
    handle_API_LikeSub_L,
    handle_API_MoreContentHisSub_R,
    handle_API_MoreContentSub_R,
    handle_API_Sub_C,
    handle_API_Sub_L,
    handle_API_Sub_U,
} from './HandleAPISub';
//
import {
    handle_API_HistorySub2_L,
    handle_API_LikeSub2_L,
    handle_API_MoreContentHisSub2_R,
    handle_API_MoreContentSub2_R,
    handle_API_Sub2_C,
    handle_API_Sub2_L,
    handle_API_Sub2_U,
} from './HandleAPISub2';

// ---- CMT

export function handle_API_VidPicMoreContentCmt_R(cmt_id) {
    return handle_API_MoreContentCmt_R(cmt_id, true);
}

export function handle_API_VidPicCmt_L(post_id, c_count) {
    return handle_API_Cmt_L(post_id, c_count, true);
}

export function handle_API_VidPicCmt_C(post_id, data) {
    return handle_API_Cmt_C(post_id, data, true);
}

export function handle_API_VidPicCmt_U(cmt_id, data) {
    return handle_API_Cmt_U(cmt_id, data, true);
}

export function handle_API_VidPicLikeCmt_L(cmt_id, c_count, type_like) {
    return handle_API_LikeCmt_L(cmt_id, c_count, type_like, true);
}

export function handle_API_VidPicHistoryCmt_L(cmt_id, c_count) {
    return handle_API_HistoryCmt_L(cmt_id, c_count, true);
}

export function handle_API_MoreContentHisVidPicCmt_R(cmt_id) {
    return handle_API_MoreContentHisCmt_R(cmt_id, true);
}

// ------ SUB

export function handle_API_VidPicMoreContentSub_R(sub_id) {
    return handle_API_MoreContentSub_R(sub_id, true);
}

export function handle_API_VidPicSub_L(cmt_id, c_count) {
    return handle_API_Sub_L(cmt_id, c_count, true);
}

export function handle_API_VidPicSub_C(cmt_id, data) {
    return handle_API_Sub_C(cmt_id, data, true);
}

export function handle_API_VidPicSub_U(sub_id, data) {
    return handle_API_Sub_U(sub_id, data, true);
}

export function handle_API_VidPicLikeSub_L(sub_id, c_count, type_like) {
    return handle_API_LikeSub_L(sub_id, c_count, type_like, true);
}

export function handle_API_VidPicHistorySub_L(sub_id, c_count) {
    return handle_API_HistorySub_L(sub_id, c_count, true);
}

export function handle_API_VidPicMoreContentHisSub_R(his_id, c_count) {
    return handle_API_MoreContentHisSub_R(his_id, c_count, true);
}

// ------ SUB2

export function handle_API_VidPicMoreContentSub2_R(sub_id) {
    return handle_API_MoreContentSub_R(sub_id, true);
}

export function handle_API_VidPicSub2_L(cmt_id, c_count) {
    return handle_API_Sub_L(cmt_id, c_count, true);
}

export function handle_API_VidPicSub2_C(cmt_id, data) {
    return handle_API_Sub_C(cmt_id, data, true);
}

export function handle_API_VidPicSub2_U(sub_id, data) {
    return handle_API_Sub_U(sub_id, data, true);
}

export function handle_API_VidPicLikeSub2_L(sub_id, c_count, type_like) {
    return handle_API_LikeSub_L(sub_id, c_count, type_like, true);
}

export function handle_API_VidPicHistorySub2_L(sub_id, c_count) {
    return handle_API_HistorySub_L(sub_id, c_count, true);
}

export function handle_API_VidPicMoreContentHisSub2_R(his_id, c_count) {
    return handle_API_MoreContentHisSub_R(his_id, c_count, true);
}
