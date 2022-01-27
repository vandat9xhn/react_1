import { getRandomBool } from '../_common/default_bool';
import { getRandomId } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_post_user_tag_obj = () => {
    return {
        id: getRandomId(),
        profile_model: getRandomId(),
        first_name: getRandomName(),
        last_name: getRandomName(),
        picture: getRandomImg(),
    };
};

export const default_post_user_tag_arr = (count = 4) => {
    return getRandomBool()
        ? getDefaultArr(default_post_user_tag_obj, 0, count)
        : [];
};

//
const default_post_user_tag_detail_obj = () => {
    return {
        id: getRandomId(),
        ...getRandomUser(),
    };
};

export const default_post_user_tag_detail_arr = (count = 4) => {
    return getDefaultArr(default_post_user_tag_detail_obj, 2, count);
};
