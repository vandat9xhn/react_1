import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomImg } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_hot_image_obj = () => ({
    vid_pic: getRandomImg(),
});

export const default_hot_image_arr = () =>
    getDefaultArr(default_hot_image_obj, 5, 10);

//
const product_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomImg(),
    product_model: 5,
});

export const getProductVidPicArr = (min, max) =>
    getDefaultArr(product_vid_pic_obj, min, max);

//
export const owner_info = () => ({
    rating: 4.6,
    rate_count: getRandomNumber(1, 20) * 1000,
    reply_chat: '100%',
    time_joined: '2021-04-13T21:25:13.739874Z',
    products: 400,
    reply_time: 60,
    followed: getRandomNumber(50, 600) * 1000,
    following: getRandomNumber(1, 20) * 1000,
});

//
export const product_name_arr = [
    '[Auth-Date mới] Benzac AC 2.5%, 5% - Kem hỗ trợ giảm mụn',
    'Product name sd asd asd asd asd asd asd asd ada sd as da sd asd  as da sda sda sd ada',
];
