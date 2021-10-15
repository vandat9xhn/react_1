//
export const PL_PHONES_MIN_PRICE = 100;
export const PL_PHONES_MAX_PRICE = 50000;

//
export const PL_PHONES_SORT_ARR = [
    { title: 'Nổi bật', sort_key: 'specific' },
    { title: '% Giảm', sort_key: 'discount' },
    { title: 'Giá cao đến thấp', sort_key: 'price' },
    { title: 'Giá thấp đến cao', sort_key: '-price' },
];

//
const phone_brand_filter_obj = () => ({
    title: 'Hãng',
    c_title: '',
    name: 'brand',
    item_arr: [
        { title: 'Samsung', checked: false, filter_key: 'ss' },
        { title: 'iPhone', checked: false, filter_key: 'ip' },
        { title: 'Oppo', checked: false, filter_key: 'op' },
        { title: 'Xiaomi', checked: false, filter_key: 'xm' },
        { title: 'Realme', checked: false, filter_key: 'rm' },
        { title: 'Nokia', checked: false, filter_key: 'nk' },
        { title: 'Vivo', checked: false, filter_key: 'vv' },
    ],
});

const phone_price_filter_obj = () => ({
    title: 'Giá',
    c_title: '',
    name: 'price',
    item_arr: [
        {
            title: 'Dưới 2 triệu',
            checked: false,
            filter_key: 'price_1',
        },
        {
            title: 'Từ 2 - 4 triệu',
            checked: false,
            filter_key: 'price_2',
        },
        {
            title: 'Từ 4 - 7 triệu',
            checked: false,
            filter_key: 'price_3',
        },
        {
            title: 'Từ 7 - 13 triệu',
            checked: false,
            filter_key: 'price_4',
        },
        {
            title: 'Từ 13 - 20 triệu',
            checked: false,
            filter_key: 'price_5',
        },
        {
            title: 'Trên 20 triệu',
            checked: false,
            filter_key: 'price_6',
        },
    ],
});

const phone_filter_arr = () => [
    {
        title: 'Loại điện thoại',
        c_title: '',
        name: 'os',

        item_arr: [
            {
                title: 'Android',
                checked: false,
                filter_key: 'android',
            },
            {
                title: 'iPhone (iOS)',
                checked: false,
                filter_key: 'ios',
            },
            {
                title: 'Điện thoại phổ thông',
                checked: false,
                filter_key: 'other',
            },
        ],
    },
    {
        title: 'Hiệu năng & Pin',
        c_title: '',
        name: 'pin',

        item_arr: [
            {
                title: 'Chơi game / Cấu hình cao',
                checked: false,
                filter_key: 'gaming',
            },
            {
                title: 'Pin khủng trên 5000 mAh',
                checked: false,
                filter_key: 'large_pin',
            },
            {
                title: 'Sạc pin nhanh',
                checked: false,
                filter_key: 'fast_pin',
            },
        ],
    },
    {
        title: 'RAM',
        c_title: '',
        name: 'ram',

        item_arr: [1, 2, 3, 4, 6, 8, 12].map((item) => ({
            title: `${item} GB`,
            checked: false,
            filter_key: `ram_${item}G`,
        })),
    },
    {
        title: 'Bộ nhớ trong',
        c_title: '',
        name: 'memory',

        item_arr: [8, 16, 32, 64, 128, 216, 512].map((item) => ({
            title: `${item} GB`,
            checked: false,
            filter_key: `memory_${item}G`,
        })),
    },
    {
        title: 'Camera',
        c_title: '',
        name: 'camera',

        item_arr: [
            {
                title: 'Chụp cận cảnh (Macro)',
                checked: false,
                filter_key: 'camera_macro',
            },
            {
                title: 'Chụp góc rộng',
                checked: false,
                filter_key: 'camera_large_angle',
            },
            {
                title: 'Chụp xoá phông',
                checked: false,
                filter_key: 'camera_remove_font',
            },
            {
                title: 'Chụp zoom xa',
                checked: false,
                filter_key: 'camera_zoom',
            },
        ],
    },
    {
        title: 'Tính năng đặc biệt',
        c_title: '',
        name: 'special',

        item_arr: [
            {
                title: 'Hỗ trợ 5G',
                checked: false,
                filter_key: '5G',
            },
            {
                title: 'Bảo mật khuôn mặt',
                checked: false,
                filter_key: 'secure_face',
            },
            {
                title: 'Bảo mật vân tay',
                checked: false,
                filter_key: 'secure_finger',
            },
            {
                title: 'Sạc không dây',
                checked: false,
                filter_key: 'wireless_charging',
            },
            {
                title: 'Kháng nước, bụi',
                checked: false,
                filter_key: 'water_protection',
            },
        ],
    },
    {
        title: 'Thiết kế',
        c_title: '',
        name: 'design',

        item_arr: [
            {
                title: 'Tràn viền',
                checked: false,
                filter_key: 'border_overflow',
            },
            {
                title: 'Mỏng nhẹ',
                checked: false,
                filter_key: 'thin_soft',
            },
            {
                title: 'Mặt lưng kính',
                checked: false,
                filter_key: 'glass_back',
            },
        ],
    },
    {
        title: 'Màn hình',
        c_title: '',
        name: 'screen',

        item_arr: [
            {
                title: 'Nhỏ gọn dễ cầm',
                checked: false,
                filter_key: 'screen_small',
            },
            {
                title: 'Từ 6 inch trở lên',
                checked: false,
                filter_key: 'screen_6inch',
            },
            {
                title: 'Màn hình gập',
                checked: false,
                filter_key: 'screen_folding',
            },
        ],
    },
];

//
const phone_filter_check_arr = () => {
    return [
        {
            title: 'Giảm giá',
            checked: false,
            filter_key: 'discount',
        },
        {
            title: 'Góp 0%',
            checked: false,
            filter_key: 'installment_0',
        },
        {
            title: 'Độc quyền',
            checked: false,
            filter_key: 'monopoly',
        },
        {
            title: 'Mới',
            checked: false,
            filter_key: 'new',
        },
    ];
};

//
export const initial_pl_phones_state = () => {
    //
    return {
        filter_arr: [
            phone_brand_filter_obj(),
            phone_price_filter_obj(),
            ...phone_filter_arr(),
        ],
        filter_count: 0,
        filter_result_count: 0,
        filter_fetching: false,

        filter_check_arr: phone_filter_check_arr(),
        sort_ix: 0,

        product_arr: [],
        count: 0,
        is_fetching: false,
        has_fetched: false,

        is_price_custom: false,
        price_custom_1: PL_PHONES_MIN_PRICE,
        price_custom_2: PL_PHONES_MAX_PRICE,
    };
};

//
export const INITIAL_PL_PHONES_STATE = initial_pl_phones_state();
