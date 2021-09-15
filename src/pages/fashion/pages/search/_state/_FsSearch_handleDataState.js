import { default_shop_obj } from '../../../../../_default/fashion/DefaultShop';
import { default_fs_search_filter_arr } from '../../../../../_default/fashion/search';
//
import {
    initial_fashion_search_product_arr,
    initial_fashion_shop,
} from '../../../../../_initial/fashion/FashionInitial';
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
        shop_id: -1,
        shop_info: {} || initial_fashion_shop(),

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
        shop_id: new_shop_id = -1,

        q: new_value_search,
        rate: new_rate_ix,
        page: new_page = 1,
        sort,

        min_price = 0,
        max_price = 0,
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
            min_price: min_price,
            max_price: max_price,
            is_fetching: true,
        };
    });

    const { data, pages: new_pages } = await handle_API_FsSearch_L({
        ...search_obj,
        size: 30,
    });

    setStateObj((state_obj = FsSearch_initial_state_obj()) => {
        let new_filter_arr = [...state_obj.filter_arr];
        let new_shop_info = { ...state_obj.shop_info };

        // filter arr
        if (!state_obj.has_fetched) {
            new_filter_arr = default_fs_search_filter_arr();
        }

        // shop
        if (new_shop_id < 0) {
            new_shop_info = {};
        } else {
            if (state_obj.shop_id != new_shop_id) {
                new_shop_info = default_shop_obj();
            }
        }

        for (const filter_obj of new_filter_arr) {
            const search_filter = search_obj[filter_obj.name];

            const search_filter_arr = !search_filter
                ? []
                : typeof search_filter == 'string'
                ? [search_filter]
                : search_filter;

            filter_obj.arr.forEach((item) => {
                if (search_filter_arr.includes(item.id.toString())) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
        }

        //
        return {
            ...state_obj,
            shop_id: new_shop_id,
            shop_info: new_shop_info,

            product_arr: data,
            filter_arr: new_filter_arr,

            page: +new_page,
            pages: +new_pages,
            value_search: new_value_search,

            is_fetching: false,
            has_fetched: true,
        };
    });
}
