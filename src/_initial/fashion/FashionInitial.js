import { getRandomNumber } from "../../_default/_common/default_id";

//
export const initial_fashion_item_obj = () => ({
    id: 0,
    vid_pics: [] || [''],
    total_add_cart: 0,
    brand: '',
    type: '',
    name: '',

    is_like: false,
    flash_img: '',

    deal_info: {} || {
        id: -1,
        label: 'Mua Kèm Deal Sốc' || 'Mua để nhận quà',
        type: 0 || 1,
    },

    bundle_deal_info: {} || {
        id: -1,
        label: 'Mua 2 & giảm 10%',
    },

    tier_variations: [] || [
        {
            name: '',
            options: [''],
            vid_pics: [''],
        },
    ],

    models: [] || [
        {
            name: '',
            tier_ix_arr: [-1],
            new_price: 0,
            old_price: 0,
            quantity: 0,
            total_add_cart: 0,
        },
    ],

    categories: [] || [
        {
            id: 0,
            display_name: '',
            no_sub: false,
        },
    ],

    new_price: 0,
    new_price_max: 0,
    old_price: 0,
    old_price_max: 0,

    discount: '',
    attributes: [] || [
        {
            id: -1,
            name: '',
            value: '',
        },
    ],
    description: '',
    quantity: 0,
    sold: 0,
    created_time: '',
    updated_time: '',
});

//
export const initial_fashion_item_base_obj = () => {
    return {
        id: -1,
        name: '',
        img: '',
        flash_img: '',
        total: 0,
        sold: 0,
        rate_avg: 0,
        is_like: false,
        is_plus: false,
        is_mall: false,

        shop_deals: [],
        discount: '',
        address: '',

        new_price: 0,
        old_price: 0,
        new_price_max: 0,
        old_price_max: 0,
    };
};

//
export const initial_fashion_shop = () => ({
    id: 0,
    name: '',
    picture: '',
    place: '',
    location: '',
    description: '',

    time_online: '',
    count_like: 0,
    profile_model: 0,

    banner: '',
    vid_pics: [''],
    category_arr: [
        {
            id: -1,
            name: '',
            title: '',
        },
    ],

    discount_arr: [
        {
            voucher_code: '',
            min_spend: 0,
            percentage_used: 0,
            start_time: 0,
            end_time: 0,
            discount_value: 0,
            is_percent: false,
            discount_str: '',
            status_card: 'available',
        },
    ],
    ship_arr: [
        {
            min_spend: 0,
            cost: 0,
            transport_arr: [''],
        },
    ],
    ship_text: '',

    rating: 0,
    rate_count: 0,
    reply_chat: '',
    reply_time: 0,
    products: 0,
    followed: 0,
    following: 0,
    time_joined: new Date().toString(),
});

export const initial_fs_item_gift_obj = () => ({
    id: -1,
    mains: [] || [
        {
            id: -1,
            image: '',
            name: '',
        },
    ],
    gifts: [] || [
        {
            id: -1,
            image: '',
            name: '',
        },
    ],
    main_count: 0,
    gift_count: 0,
    min_spend: 0,
    gift_count: 0,
});

//
export const initial_fs_item_hot_deal_arr = () => [initial_fashion_item_obj()];

//
export const initial_fashion_search_product_arr = () => {
    return [initial_fashion_item_base_obj()];
};
