import { getRandomBool } from '../_common/default_bool';
import { getRandomId } from '../_common/default_id';
import { getRandomVidPic, getRandomVidPicOrNull } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

/* ------------------ CITY --------------- */

//
const city_name_arr = [
    'Ha Noi',
    'Ha Nam',
    'Nam Dinh',
    'Da Lat',
    'Da Nang',
    'Can Tho',
    'Ho Chi Minh',
];

const street_name_arr = [
    'Nguyen Trai',
    'Ha Dong',
    'Nguyen Hue',
    'Tran Khat Tran',
    'Hai Ba Trung',
    'Khuat Duy Tien',
    'Cau Giay',
    'To Huu',
];

const bg_color_arr = [
    'bg-linear-45-success-tear.text-white',
    'bg-primary.text-primary',
    'bg-active-fb.text-secondary',
    'bg-green.color-react',
];

const quote_arr = [
    'This is a street of Ha Noi',
    'This is a street of Ha Nam',
    'This is a street of Nam Dinh',
    'This is a street of Da Nang',
    'This is a street of Da Lat',
    'This is a street of Can Tho',
    'This is a street of Ho Chi Minh',
];

const getRandomCommonCityObj = () => ({
    city: getRandomFromArr(city_name_arr),
    street: getRandomFromArr(street_name_arr),
    quote: getRandomFromArr(quote_arr),
    bg_color: getRandomFromArr(bg_color_arr),
});

//
export const default_city_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    ...getRandomCommonCityObj(),
    image: getRandomVidPic(),
    is_user: getRandomBool(),
    count_his: 2,
});

export const default_city_arr = () => getDefaultArr(default_city_obj, 4, 4);

//
export const default_city_history_obj = () => ({
    id: getRandomId(),
    ...getRandomCommonCityObj(),
    image: getRandomVidPicOrNull(),
    created_time: '2021-06-29T06:51:05.370Z',
});

export const default_city_history_arr = () =>
    getDefaultArr(default_city_history_obj, 3, 4);