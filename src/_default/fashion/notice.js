import { getRandomBool } from '../_common/default_bool';
import { getRandomId } from '../_common/default_id';
import {
    getRandomVidPic,
    getRandomVidPicOrNull,
} from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

const default_fs_notice_obj = () => {
    return {
        id: getRandomId(),
        link_to: '/fashion',
        logo: getRandomVidPic(),
        name: 'Rình rang mã hot cho siêu sale 22.09',
        info: '😍 Hoàn xu đến 20K cho đơn 99K 💥 Hoàn xu đến 100K cho đơn 500K ⚡ Hoàn xu Shopee Mall đến70K👉 Săn trước hôm nay để dành 22.9 bạn ơi!',
        img: getRandomVidPicOrNull(),
        has_read: getRandomBool(),
        created_time: new Date().getTime(),
    };
};

export const default_fs_notice_arr = () =>
    getDefaultArr(default_fs_notice_obj, 8, 10);
