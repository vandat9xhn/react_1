import { getRandomBool } from '../_common/default_bool';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
export const default_fs_bank_card_obj = () => {
    //
    return {
        id: getRandomId(),
        bg: 'var(--blue)',
        discount: getRandomBool()
            ? getRandomNumber(10, 40) + '%'
            : `${getRandomNumber(10, 4) * 1000}`,
        description: 'Ưu đãi mỗi thứ 2 hàng tuần',
        logo: getRandomImg(),
    };
};

export const default_fs_bank_card_arr = () =>
    getDefaultArr(default_fs_bank_card_obj, 5, 6);
