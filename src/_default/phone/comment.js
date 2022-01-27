import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImgOrNull } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';

//
function getFirstLetterUserName(user_name = '') {
    const last_index_of_space = user_name.indexOf(' ');

    return user_name.slice(last_index_of_space + 1, last_index_of_space + 2);
}

//
const default_pl_detail_reply_obj = () => {
    const user_name = getRandomName();

    //
    return {
        id: getRandomId(),
        first_letter_user_name: getFirstLetterUserName(user_name),
        user_name: user_name,
        is_admin: getRandomBool(),
        content: getRandomContent(),
        img: getRandomImgOrNull(),
        commented_time:
            getRandomNumber(1, 4) +
            (getRandomBool() ? ' tuần' : ' tháng') +
            ' trước',
        user_liked: getRandomBool(),
        user_not_liked: getRandomBool(),
    };
};

const default_pl_detail_reply_arr = () => {
    return getRandomBool()
        ? getDefaultArr(default_pl_detail_reply_obj, 0, 3)
        : [];
};

const default_pl_detail_comment_obj = () => {
    //
    return {
        ...default_pl_detail_reply_obj(),
        reply_arr: default_pl_detail_reply_arr(),
    };
};

export const default_pl_detail_comment_arr = () => {
    return getDefaultArr(default_pl_detail_comment_obj, 10, 10);
};
