import { getRandomBool } from '../_common/default_bool';
import { getRandomId } from '../_common/default_id';
import { getRandomGroup, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_group_notice_obj = () => {
    return {
        id: getRandomId(),
        ...getRandomUser(),
        ...getRandomGroup(),
        type: 'posted',
        has_seen: getRandomBool(),
        created_time: new Date().toString(),
    };
};

export const default_fb_group_notice_arr = () => {
    return getDefaultArr(default_fb_group_notice_obj, 4, 10);
};
