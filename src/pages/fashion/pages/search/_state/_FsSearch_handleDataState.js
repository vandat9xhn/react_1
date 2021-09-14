import { initial_fashion_search_product_arr } from '../../../../../_initial/fashion/FashionInitial';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import { handle_API_FsSearch_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';

//
export const FsSearch_SORT_ARR = ['Phổ biến', 'Mới nhất', 'Bán chạy'];
export const FsSearch_SORT_KEY_ARR = ['common', '-date', '-sold'];

export const FsSearch_SORT_PRICE_ARR = ['Thấp đến cao', 'Cao đến thấp'];
export const FsSearch_SORT_PRICE_KEY_ARR = ['new_price', '-new_price'];

export const FsSearch_FULL_SORT_ARR = [
    ...FsSearch_SORT_ARR,
    ...FsSearch_SORT_PRICE_ARR,
];
export const FsSearch_FULL_KEY_SORT_ARR = [
    ...FsSearch_SORT_KEY_ARR,
    ...FsSearch_SORT_PRICE_KEY_ARR,
];

//
export const getSortBy = (sort_ix) => FsSearch_FULL_KEY_SORT_ARR[sort_ix];

//
export const Fs_Search_initial_filter_checked_obj = () => {
    return [
        {
            name: '',
            title: '',
            order: 0,
            arr: [{ id: 0, title: '', checked: false }],
        },
    ];
};

//
export const FsSearch_initial_state_obj = () => {
    return {
        product_arr: [] || initial_fashion_search_product_arr(),
        filter_arr: [] || Fs_Search_initial_filter_checked_obj(),

        page: 1,
        pages: 1,

        value_search: '',
        min_price: 0,
        max_price: 0,
        rate_ix: 0,
        sort_ix: 0,

        has_fetched: false,
        is_fetching: false,
        open_filter: false,
    };
};

//
export async function FsSearch_getData_API({ setStateObj = () => {} }) {
    const search_obj = ParseLocationSearch();
    const {
        page: new_page,
        q: new_value_search,
        sort,
        rate: new_rate_ix,
        min_price,
        max_price,
    } = search_obj;

    const new_sort_ix = FsSearch_FULL_KEY_SORT_ARR.findIndex(
        (item) => item == sort
    );

    setStateObj((state_obj = FsSearch_initial_state_obj()) => {
        const new_filter_arr = [...state_obj.filter_arr];

        return {
            ...state_obj,
            rate_ix: new_rate_ix,
            filter_arr: new_filter_arr,
            sort_ix: new_sort_ix == -1 ? 0 : new_sort_ix,
            min_price: min_price ||  0,
            max_price: max_price || 0,
            is_fetching: true,
        };
    });

    const { data, pages: new_pages } = await handle_API_FsSearch_L({
        ...search_obj,
        size: 30,
    });

    setStateObj((state_obj = FsSearch_initial_state_obj()) => {
        let new_filter_arr = [...state_obj.filter_arr];

        if (!state_obj.has_fetched) {
            new_filter_arr = [
                {
                    name: 'category',
                    title: 'Danh mục',
                    order: 0,
                    arr: [
                        {
                            id: 1,
                            title: 'Quần áo',
                            checked: false,
                        },
                        {
                            id: 2,
                            title: 'Thời trang nam',
                            checked: false,
                        },
                        {
                            id: 3,
                            title: 'Thời trang hè',
                            checked: false,
                        },
                        {
                            id: 4,
                            title: 'Áo phông',
                            checked: false,
                        },
                    ],
                },

                {
                    name: 'area',
                    title: 'Nơi bán',
                    order: 0,
                    arr: [
                        { id: 1, title: 'Ha Noi', checked: false },
                        { id: 2, title: 'HCM', checked: false },
                        { id: 3, title: 'Da Nang', checked: false },
                    ],
                },

                {
                    name: 'transporter',
                    title: 'Đợn vị vận chuyển',
                    order: 2,
                    arr: [
                        { id: 1, title: 'Hỏa tốc', checked: false },
                        { id: 2, title: 'Nhanh', checked: false },
                        { id: 3, title: 'Tiết kiệm', checked: false },
                    ],
                },

                {
                    name: 'brand',
                    title: 'Thương hiệu',
                    order: 4,
                    arr: [
                        { id: 1, title: 'Chanel', checked: false },
                        { id: 2, title: 'Gucci', checked: false },
                        { id: 3, title: 'Adiddas', checked: false },
                    ],
                },

                {
                    name: 'type_shop',
                    title: 'Loại shop',
                    order: 5,
                    arr: [
                        { id: 1, title: 'Yêu thích', checked: false },
                        { id: 2, title: 'Yêu thích +', checked: false },
                        { id: 3, title: 'Mall', checked: false },
                    ],
                },

                {
                    name: 'service',
                    title: 'Dịch vụ & khuyến mãi',
                    order: 6,
                    arr: [
                        { id: 1, title: 'FreeShip Xtra', checked: false },
                        { id: 2, title: 'Hoàn xu Xtra', checked: false },
                        { id: 3, title: 'Đang giảm giá', checked: false },
                        { id: 4, title: 'Miễn phí vận chuyện', checked: false },
                        { id: 5, title: 'Gì cũng rẻ', checked: false },
                        { id: 6, title: 'Hàng có sẵn', checked: false },
                        { id: 7, title: 'Buôn sỉ', checked: false },
                    ],
                },
            ];
        }

        for (const filter_obj of new_filter_arr) {
            if (search_obj[filter_obj.name]) {
                filter_obj.arr.forEach((item) => {
                    if (
                        (typeof search_obj[filter_obj.name] == 'string'
                            ? [search_obj[filter_obj.name]]
                            : search_obj[filter_obj.name]
                        ).includes(item.id.toString())
                    ) {
                        item.checked = true;
                    } else {
                        item.checked = false;
                    }
                });
            } else {
                filter_obj.arr.forEach((item) => {
                    item.checked && (item.checked = false);
                });
            }
        }

        return {
            ...state_obj,
            product_arr: data,
            filter_arr: new_filter_arr,

            page: new_page ? +new_page : 1,
            pages: +new_pages,
            value_search: new_value_search,

            is_fetching: false,
            has_fetched: true,
        };
    });
}
