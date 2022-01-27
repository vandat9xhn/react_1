import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getRandomPageName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_fb_watch_new_obj = () => {
    const name = getRandomPageName();

    return {
        id: getRandomId(),
        name: name,
        picture: getRandomImg(),

        title: `New video from ${name}`,
        link_to: `/watch/latest/${name.toLowerCase().replace(/ /g, '')}`,
        time_str: `${getRandomNumber(2, 16)} hours ago`,
    };
};

export const default_fb_watch_new_arr = () => {
    const count = getRandomBool() ? getRandomNumber(0, 8) : 0;

    return getDefaultArr(default_fb_watch_new_obj, count, count);
};
