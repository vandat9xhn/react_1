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
export const initial_fashion_shop = () => ({
    id: 0,
    name: '',
    picture: '',
    banner: '',
    address: '',
    info: '',
    time_online: '',
    vid_pics: [],
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
    rating_star: 0,
    profile_model: 0,

    count_like: 0,

    rating: 0,
    reply_chat: '',
    time_joined: new Date().toString(),
    products: 0,
    reply_time: 0,
    followed: 0,
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
export const initial_fashion_search_products_obj = () => {
    return {
        0: [
            {
                id: 0,
                vid_pics: [
                    {
                        id: 0,
                        vid_pic: '',
                    },
                ],
                count_rate: 0,
                total_rate: 0,
                address: '',
                brand: '',
                type: '',
                hashtag: '',
                name: '',
                new_price: 0,
                old_price: 0,
                discount: 0,
                sold: 0,
            },
        ],
    };
};
