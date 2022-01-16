import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomPageName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_watchlist_obj = () => {
    const has_follow = getRandomBool();
    const name = getRandomPageName();

    return {
        id: getRandomId(),
        name: name,
        picture: getRandomVidPic(),

        count_new: getRandomBool() ? getRandomNumber(0, 20) : 0,
        link_to: `/watch/${name.toLowerCase().replace(/ /g, '')}`,
        has_notice: !has_follow ? false : getRandomBool(),
        has_follow: has_follow,
    };
};

export const default_fb_watchlist_arr = () => {
    return getDefaultArr(default_fb_watchlist_obj, 16, 16);
};
