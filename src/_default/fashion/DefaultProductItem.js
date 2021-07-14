import { getRandomContentObj } from '../_common/default_content';
import { getRandomId } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { owner_info, product_name_arr } from './FashionDefault';

//
const product_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    product_model: 2,
});

const product_vid_pic_arr = () => getDefaultArr(product_vid_pic_obj, 2, 10);

export const default_product_obj = () => ({
    id: getRandomId(),
    vid_pics: product_vid_pic_arr(),
    total_add_cart: 0,
    shop_obj: {
        id: 3,
        picture: getRandomVidPic(),
        name: 'Shop Name 3',
        address: 'Shop address 2',
        info: 'Shop info 2',
        owner_info: owner_info,
    },
    brand: 'Product brand 5',
    type: 'Product type 5',
    hashtag: 'Product hashtag 1',
    name: getRandomFromArr(product_name_arr),
    new_price: 460696,
    old_price: 460696,
    discount: 5,
    description:
        'Product description a dasd asd\nasd asd asd asd\nas ad ad asda sd\n asdada d',
    quantity: 62,
    sold: 0,
    created_time: '2021-04-13T21:25:14.131178Z',
    updated_time: '2021-04-23T02:27:05.287671Z',
});

/* ------ COMMENT ------- */

const product_cmt_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    comment_model: 2,
});

const product_cmt_vid_pic_arr = () =>
    getDefaultArr(product_cmt_vid_pic_obj, 0, 10);

//
const default_product_cmt_obj = () => ({
    id: getRandomId(),
    ...getRandomUser(),
    vid_pics: product_cmt_vid_pic_arr(),
    count_vid_pic: 0,
    ...getRandomContentObj(),
    created_time: '2021-04-18T07:21:04.632269Z',
    product_model: 4,
    profile_model: 1,
});

export const default_product_cmt_arr = () =>
    getDefaultArr(default_product_cmt_obj, 0, 10);

/* ----- RATE --------- */

//
export const default_rate_arr = () => ({
    rate_arr: [],
    rate_count: 1,
    rate_total: 4,
    rate_num_arr: [0, 0, 0, 1, 0],
    user_rate: 0,
});

//
export const default_rate_content = () => ({
    content: 'This is content of rate',
});
