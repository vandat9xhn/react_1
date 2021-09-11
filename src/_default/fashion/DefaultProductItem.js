import { getRandomBool } from '../_common/default_bool';
import { getRandomContentObj } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomVidPic } from '../_common/default_image';
import { getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';
//
import { product_name_arr } from './FashionDefault';

//
const product_vid_pic_obj = () => getRandomVidPic();
const product_vid_pic_arr = (min = 2, max = 10) =>
    getDefaultArr(product_vid_pic_obj, min, max);

//
const default_tier_object_1 = () => {
    return {
        name: 'Hàm lượng',
        options: [
            '2.5% - 15g',
            '5% - 15g',
            '2.5% - 60g',
            '5% - 60g',
            '5%- 15g hộp móp',
            '2.5% -15g hộp móp',
        ],
        vid_pics: product_vid_pic_arr(6, 6),
    };
};

const default_tier_object_2 = () => {
    return {
        name: 'Màu',
        options: ['Xanh', 'Lam', 'Trắng'],
    };
};

const default_tier_arr = () => {
    return getRandomBool()
        ? [default_tier_object_1(), default_tier_object_2()]
        : [];
};

const default_models = ({
    tier_count_1 = 0,
    tier_count_2 = 0,
    has_discount = true,

    tier_arr = [],
    item_name = '',
}) => {
    if (tier_count_1 == 0 && tier_count_2 == 0) {
        const quantity = getRandomNumber(0, 200);
        const new_price = getRandomNumber(80, 200);

        return [
            {
                id: getRandomId(),
                name: item_name,
                tier_ix_arr: [0],
                quantity: quantity,
                total_add_cart: getRandomNumber(0, quantity),
                new_price: new_price * 1000,
                old_price: has_discount
                    ? getRandomNumber(new_price + 5, new_price + 50) * 1000
                    : null,
            },
        ];
    }

    const results = [];

    for (let i = 0; i < tier_count_1; i++) {
        for (let k = 0; k < tier_count_2; k++) {
            const quantity = getRandomNumber(0, 200);
            const new_price = getRandomNumber(80, 200);

            results.push({
                id: getRandomId(),
                name: `${tier_arr[0].options[i]}-${tier_arr[1].options[k]}`,
                tier_ix_arr: [i, k],
                quantity: quantity,
                total_add_cart: getRandomNumber(0, quantity),
                new_price: new_price * 1000,
                old_price: has_discount
                    ? getRandomNumber(new_price + 5, new_price + 50) * 1000
                    : null,
            });
        }
    }

    return results;
};

const default_category_arr = () => {
    return [
        {
            catid: 100630,
            display_name: 'Sắc Đẹp',
            no_sub: false,
            is_default_subcat: false,
        },
        {
            catid: 100664,
            display_name: 'Chăm sóc da mặt',
            no_sub: false,
            is_default_subcat: false,
        },
        {
            catid: 100904,
            display_name: 'Sản phẩm trị mụn',
            no_sub: true,
            is_default_subcat: false,
        },
    ];
};

//
export const default_product_obj = () => {
    const item_name = getRandomFromArr(product_name_arr);
    const discount = getRandomNumber(0, 50);

    const tier_arr = default_tier_arr();
    const models = tier_arr.length
        ? default_models({
              tier_count_1: tier_arr[0].options.length,
              tier_count_2: tier_arr[1].options.length,
              has_discount: discount > 0,
              tier_arr: tier_arr,
          })
        : default_models({ item_name: item_name });

    const quantity = models.reduce((a, b) => a + b.quantity, 0);

    const total_add_cart = models.reduce((a, b) => a + b.total_add_cart, 0);

    const new_price = getRandomNumber(50, 600);
    const old_price = getRandomNumber(new_price + 5, new_price + 50);
    const new_price_max = getRandomNumber(new_price + 100, new_price + 300);
    const old_price_max = getRandomNumber(
        new_price_max + 5,
        new_price_max + 50
    );

    const rate_arr = getDefaultArr(() => getRandomNumber(0, 50), 7, 7);
    const total_rate = rate_arr
        .slice(0, 5)
        .reduce((a, b, ix) => a + b * (5 - ix), 0);
    const rate_count = rate_arr.slice(0, 5).reduce((a, b) => a + b, 0);

    const deal_type = getRandomBool() * 1;

    return {
        id: getRandomId(),
        name: item_name,
        brand: 'Product brand 5',
        type: 'Product type 5',
        stock: getRandomNumber(10, 30),
        vid_pics: product_vid_pic_arr(),

        is_like: true,

        deal_info: {
            id: 3220638,
            label: ['Mua Kèm Deal Sốc', 'Mua để nhận quà'][deal_type],
            type: deal_type,
        },

        bundle_deal_info: {
            id: 3220638,
            label: 'Mua 2 & giảm 10%',
        },
        can_use_bundle_deal: false,

        rate_avg:
            rate_count == 0
                ? 0
                : Math.floor((total_rate * 10) / rate_count) / 10,
        rate_arr: getDefaultArr(() => getRandomNumber(0, 50), 7, 7),
        rate_count: rate_count,

        tier_variations: tier_arr,
        models: models,
        categories: default_category_arr(),

        new_price: new_price * 1000,
        new_price_max: new_price_max * 1000,
        old_price: old_price * 1000,
        old_price_max: old_price_max * 1000,

        discount: discount ? discount + (getRandomBool() ? 'K' : '%') : '',

        attributes: [
            {
                id: 100037,
                name: 'Xuất xứ',
                value: 'Việt Nam',
            },
        ],

        description:
            'Thành phần:\nBenzoyl Peroxide 2.5%, 5%\n\nCông dụng:\nKhi thoa lên da mụn, Benzac AC sẽ có những tác dụng:\n- Điều tiết và kiểm soát dư lượng nhờn thừa trên bề mặt da\n- Hoạt chất giảm mụn trứng cá, mụn bọc hay mụn sưng, giúp cải thiện da mụn chỉ từ 5 – 7 ngày.\n- Benzac AC có tính tiêu sừng, vì thế góp phần giảm mụn đầu trắng, mụn đầu đen, đồng thời giảm sưng, đỏ, hạn chế để lại thâm, sẹo.\n\nCách dùng:\nRửa mặt sạch bằng sữa rửa mặt (chỉ dùng tẩy trang khi có trang điểm).\nThoa kem Benzac AC 2 lần/ngày (sáng và chiều), để khô tự nhiên, không rửa mặt lại.\nCó thể dùng thêm tinh chất, serum dưỡng ẩm,… sau đó 30 phút.\n\n#benzac\n#benzac_ac_5\n#benzac_5\n#benzac_ac\n#benzoyl_peroxide\n',

        quantity: quantity,
        total_add_cart: total_add_cart,
        sold: getRandomNumber(0, 600),
        created_time: '2021-04-13T21:25:14.131178Z',
        updated_time: '2021-04-23T02:27:05.287671Z',
    };
};

export const default_product_detail_arr = () =>
    getDefaultArr(default_product_obj, 1, 10);

//

/* ------ GIFT ------- */

export const default_fs_item_gift = () => {
    return {
        id: 1858320391,
        mains: [
            {
                id: getRandomId(),
                image: getRandomVidPic(),
                name: 'Quần bò baggy rách vuông',
            },
            {
                id: getRandomId(),
                image: getRandomVidPic(),
                name: '{ RẺ VÔ ĐỊCH } Áo thun Mỹ _ Loại 2 _ Mẫu ngẫu nhiên',
            },
        ],
        gifts: [
            {
                id: getRandomId(),
                image: getRandomVidPic(),
                name: '2 khẩu trang đúc su không chọn màu',
            },
        ],
        main_count: 27,
        gift_count: 1,
        min_spend: 1000,
        gift_count: 1,
    };
};

//

/* ------ HOT DEAL ------- */

export const default_fs_item_hot_deal_arr = () => {
    return getDefaultArr(default_product_obj, 1, 4);
};

//
/* ------ RATE ------- */

const product_rate_vid_pic_obj = () => ({
    id: getRandomId(),
    vid_pic: getRandomVidPic(),
    comment_model: 2,
});

export const product_rate_vid_pic_arr = () =>
    getDefaultArr(product_rate_vid_pic_obj, 0, 10);

//
const default_product_rate_obj = () => {
    const vid_pics = product_rate_vid_pic_arr();
    const user_liked = getRandomBool();

    return {
        id: getRandomId(),
        ...getRandomUser(),
        vid_pics: vid_pics.slice(0, 3),
        count_vid_pic: vid_pics.length,
        ...getRandomContentObj(),
        created_time: '2021-04-18T07:21:04.632269Z',
        product_model: 4,
        profile_model: 1,

        rate: getRandomNumber(1, 5),
        model_name: '5% - 15g',
        count_like: getRandomBool() || user_liked ? getRandomNumber(1, 10) : 0,
        user_liked: user_liked,
        seller_reply: 'Cảm ơn sự phản hồi của Quý khách',
    };
};

export const default_rate_arr = () =>
    getRandomBool() ? getDefaultArr(default_product_rate_obj, 4, 10) : [];
