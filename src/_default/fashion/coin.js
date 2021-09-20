import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPicOrNull } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
export const default_fs_coin_history_obj = () => {
    const coin_change = getRandomNumber(-2000, 2000);
    const is_used = coin_change < 0;

    return {
        id: getRandomId(),
        name: is_used
            ? '2 Sản Phẩm Con lăn massa mặt 3D, [Free ship]MÁY HÚT MỤN CAO CẤP 5 lực hút Sạc pin'
            : coin_change >= 0
            ? 'Đăng nhập mỗi ngày'
            : 'Hạn sử dụng của Xu',
        img: getRandomVidPicOrNull(),
        reason: is_used ? 'Đã dùng Xu để thanh toán' : '',
        coin_change: coin_change || 100,
        type: is_used || coin_change < 0 ? 'used' : 'received',
    };
};

export const default_fs_coin_history_arr = () =>
    getDefaultArr(default_fs_coin_history_obj, 8, 12);
