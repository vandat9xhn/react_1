import { getRandomId } from '../_common/default_id';
import { getRandomName } from '../_common/default_name';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_fb_search_obj = () => {
    const type = getRandomFromArr(['user', 'key']);

    return {
        id: getRandomId(),
        type: type,
        search_key: type == 'user' ? '' : getRandomName(),
        user: type == 'user' ? getRandomUser().user : null,
    };
};

export const default_fb_search_arr = ({ filter = 'recently' }) => {
    return getDefaultArr(
        default_fb_search_obj,
        filter == 'recently' ? 6 : 8,
        8
    );
};
