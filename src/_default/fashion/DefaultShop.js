import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { owner_info } from './FashionDefault';

//
const shop_category_name_arr = [
    { name: 'mom', title: 'Mom' },
    { name: 'baby', title: 'Baby' },
    { name: 'other', title: 'Other' },
];

const shop_category_arr = () => shop_category_name_arr;

//
const shop_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    shop_model: 2,
});

const shop_vid_pic_arr = () => getDefaultArr(shop_vid_pic_obj, 4, 10);

//
export const default_shop_obj = () => ({
    id: getRandomId(),
    list_name: shop_category_arr(),
    vid_pics: shop_vid_pic_arr(),
    name: 'Shop 2',
    picture: getRandomVidPic(),
    banner: getRandomVidPic(),
    address: 'Product address 1',
    info: 'Shop info 1\nSentence 2\nSentence 3\nSentence 4\nSentence 5',
    created_time: '2021-04-13T21:25:13.739874Z',
    owner_info: owner_info,
    profile_model: 2,
});
