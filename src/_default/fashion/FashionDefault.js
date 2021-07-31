import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_hot_image_obj = () => ({
    vid_pic: getRandomVidPic(),
});

export const default_hot_image_arr = () =>
    getDefaultArr(default_hot_image_obj, 5, 10);

//
const product_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    product_model: 5,
});

export const getProductVidPicArr = (min, max) =>
    getDefaultArr(product_vid_pic_obj, min, max);

//
export const owner_info = [
    {
        title: 'Rating',
        value: 4.6,
    },
    {
        title: 'Reply chat',
        value: '100%',
    },
    {
        title: 'Time joined',
        value: '2021-04-13T21:25:13.739874Z',
    },
    {
        title: 'Products',
        value: 400,
    },
    {
        title: 'Reply time',
        value: new Date().toLocaleString(),
    },
    {
        title: 'Follow',
        value: 600000,
    },
];

//
export const product_name_arr = [
    'Product name 1',
    'Product name 2',
    'Product name 3',
    'Product name 4',
    'Product name 5',
    'Product name 6',
    'Product name 7',
];
