import { default_define_user } from '../login/DefaultLogin';
import { getRandomNumber } from '../_common/default_id';
import { getDefaultArr } from '../_common/getDefaultArr';
//
import { default_fb_group_member_obj } from './member';

//
const getMemberArr = (min, max, is_friend) => {
    return getDefaultArr(
        () => default_fb_group_member_obj({ is_friend: is_friend }),
        min,
        max
    );
};

const getArrCount = (min, max_arr, max_count, is_friend) => {
    const arr = getMemberArr(min, max_arr, is_friend);
    const count = getRandomNumber(
        arr.length,
        arr.length < max_arr ? arr.length : max_count
    );

    return [arr, count];
};

//
export const default_fb_group_page_member_obj = () => {
    const [admin_arr, admin_count] = getArrCount(1, 4, 7);
    const [expert_arr, expert_count] = getArrCount(0, 4, 7);
    const [friend_arr, friend_count] = getArrCount(0, 4, 10, true);
    const [same_arr, same_count] = getArrCount(4, 6, 20);
    const [near_arr, near_count] = getArrCount(2, 4, 8);
    const [new_arr, new_count] = getArrCount(8, 8, 40);

    const you_obj = {
        ...default_fb_group_member_obj(),
        ...default_define_user,
    };

    if (you_obj.type_user == 'person') {
        you_obj.action_case = '';
    } else {
        you_obj.action_name = '';
    }

    return {
        you_obj: you_obj,

        admin_arr,
        admin_count,

        expert_arr,
        expert_count,

        friend_arr,
        friend_count,

        same_arr,
        same_count,

        near_arr,
        near_count,

        new_arr,
        new_count,
    };
};
