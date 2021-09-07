import { getRandomId } from '../_common/default_id';
import { getRandomName } from '../_common/default_name';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_user_info_buy_obj = (is_default = false) => {
    //
    return {
        id: getRandomId(),
        name: getRandomName() + ' ' + getRandomName(),
        phone: '0361234567',
        province: 'Hà Nội',
        district: 'Quận Hà Đông',
        commune: 'Phường Văn Quán',
        specific: '125 Trần Phú',
        type: getRandomFromArr(['', 'home', 'office']),
        is_active: is_default,
        is_default: is_default,
    };
};

export const default_user_info_buy_arr = (is_default) =>
    getDefaultArr(() => default_user_info_buy_obj(is_default), 1, 2);
