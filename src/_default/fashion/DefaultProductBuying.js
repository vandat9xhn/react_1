import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const transport_name_arr = [
    'Ninja Van',
    'Giao hang nhanh',
    'Giao hang tiet kiem',
    'Viettel post',
];

const price_title_arr = ['Ninja 1', 'Ninja 2', 'Ninja 3', 'Ninja 4', 'Ninja 5'];

const price_obj = () => ({
    id: getRandomId(),
    title: getRandomFromArr(price_title_arr),
    price: getRandomNumber(10000, 35000),
    info: 'Price 1',
    transporter_model: 1,
});

const price_arr = () => getDefaultArr(price_obj, 3, 6);

//
const default_transporter_obj = () => ({
    id: getRandomId(),
    info: 'a b c d e f as sd\nasd asd asd asd a',
    name: getRandomFromArr(transport_name_arr),
    created_time: '2021-04-22T10:00:13Z',
    price_arr: price_arr(),
});

export const default_transporter_arr = () =>
    getDefaultArr(default_transporter_obj, 3, 6);

//
export const default_payment_arr = () => [
    { name: 'COD' },
    { name: 'BANK' },
    { name: 'VISA' },
    { name: 'MOMO' },
];
//
const default_voucher_obj = () => ({
    id: getRandomId(),
    img: getRandomImg(),
    name: 'Free 10k',
    info: 'a b c dsa as a\nas da as asd asd saa sd',
    cost: getRandomNumber(10000, 50000),

    transporter_count: 8,
    payments: 'Tất cả các hình thức thanh toán',

    total_num: 100,
    used_count: 15,
    min_spend: 50000,
    end_time: new Date().getTime(),
});

export const default_voucher_arr = () =>
    getDefaultArr(default_voucher_obj, 2, 6);
