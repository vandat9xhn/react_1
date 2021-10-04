import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { stringify } from 'query-string';
//
import { ParseLocationSearch } from '../../../../_some_function/ParseLocationSearch';
//
import { API_PhoneLaptop_L } from '../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { useMounted } from '../../../../_hooks/useMounted';
import { useDataShowMore } from '../../../../_hooks/useDataShowMore';
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';
//
import ScreenBlurShowMore from '../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import PLFilter from '../filter/_main/PLFilter';
import PLFilterCommonList from '../filter/common_list/PLFilterCommonList';
import ProductBrands from '../brands/_main/PLBrands';
import ProductContent from '../content/ProductContent';
import ProductPrices from '../prices/_main/PLPrices';
//
import './AllProducts.scss';
import './AllProductsRes.scss';

//
function changeNewSearchObj(new_search_obj = {}, arr = [], search_key = '') {
    const search_str = arr
        .filter((item) => item.checked)
        .map((item) => item.filter_key);

    if (search_str) {
        new_search_obj[search_key] = search_str;
    }
}

//
function handleFilterKey({ search_key = '', new_search_obj = {} }) {
    const new_filter_key_arr = new_search_obj[search_key];

    if (!new_filter_key_arr) {
        return {
            has_filter_key: false,
            filter_key_arr: [],
        };
    }

    if (typeof new_filter_key_arr == 'string') {
        return {
            has_filter_key: true,
            filter_key_arr: [new_filter_key_arr],
        };
    }

    return {
        has_filter_key: true,
        filter_key_arr: new_filter_key_arr,
    };
}

//
function changeFilterArr({
    filter_item_arr = [],
    has_filter_key = false,
    filter_key_arr = [],
}) {
    // console.log(has_filter_key, filter_key_arr);

    if (!has_filter_key) {
        filter_item_arr.forEach((item) => {
            item.checked = false;
        });

        return;
    }

    filter_item_arr.forEach((item) => {
        if (filter_key_arr.includes(item.filter_key)) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    });
}

//
AllProducts.propTypes = {
    product_type: PropTypes.string,
};

AllProducts.defaultProps = {
    product_type: '',
};

//
function AllProducts({
    product_type,

    brand_arr,
    price_arr,
    filter_arr,
}) {
    //
    const { data_state, setDataState, getData_API, refreshData_API } =
        useDataShowMore({
            initial_arr: [],
            handle_API_L: handle_API_PhoneLaptop_L,
            other_state: {
                filter_count: 0,
                filter_result_count: 0,
                filter_fetching: false,
            },
        });

    const {
        data_arr,
        count,
        is_fetching,
        has_fetched,

        filter_count,
        filter_result_count,
        filter_fetching,
    } = data_state;

    //
    const mounted = useMounted();
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        if (mounted) {
            handleRefresh();
        }
    }, [location.search]);

    // ----- API

    //
    async function handle_API_PhoneLaptop_L(c_count) {
        const res = await API_PhoneLaptop_L({
            type: product_type,
            ...ParseLocationSearch(),
            page: 1,
            size: 30,
            c_count: c_count,
        });

        return res.data;
    }

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleFilter() {
        let new_search_obj = {};

        [
            { item_arr: brand_arr, name: 'brand' },
            { item_arr: price_arr, name: 'price' },
            ...filter_arr,
        ].forEach((filter_obj) => {
            changeNewSearchObj(
                new_search_obj,
                filter_obj.item_arr,
                filter_obj.name
            );
        });

        const new_search = stringify(new_search_obj);
        history.pushState('', '', `${location.pathname}?${new_search}`);
        forceUpdate();
    }

    //
    async function getData_Filter({ new_checked = true, is_refresh = false }) {
        setDataState((data_state) => {
            return {
                ...data_state,
                filter_count: is_refresh
                    ? 0
                    : data_state.filter_count + new_checked * 1,
                filter_fetching: true,
            };
        });

        const res = await API_PhoneLaptop_L({
            page: 1,
            size: 1,
        });

        setDataState((data_state) => {
            return {
                ...data_state,
                filter_result_count: res.data.count,
                filter_fetching: false,
            };
        });
    }

    //
    function handleRefresh() {
        const new_search_obj = ParseLocationSearch();

        [
            { item_arr: brand_arr, name: 'brand' },
            { item_arr: price_arr, name: 'price' },
            ...filter_arr,
        ].forEach((filter_obj) => {
            changeFilterArr({
                filter_item_arr: filter_obj.item_arr,
                ...handleFilterKey({
                    search_key: filter_obj.name,
                    new_search_obj: new_search_obj,
                }),
            });
        });

        refreshData_API();
    }

    // ----- CHOOSE

    //
    function handleChooseBrand(brand_ix) {
        const new_checked = !brand_arr[brand_ix].checked;

        brand_arr[brand_ix].checked = new_checked;
        handleFilter();
    }

    //
    function handleChoosePrice(price_ix) {
        const new_checked = !price_arr[price_ix].checked;

        price_arr[price_ix].checked = new_checked;
        handleFilter();
    }

    //
    function chooseFilterItem({ filter_ix, item_ix }) {
        const new_checked = !filter_arr[filter_ix].item_arr[item_ix].checked;

        filter_arr[filter_ix].item_arr[item_ix].checked = new_checked;
        getData_Filter({ new_checked: new_checked });
    }

    // ----- 

    //
    function clearFilter() {
        if (location.search) {
            history.pushState('', '', location.pathname);
            forceUpdate();

            return;
        }

        if (
            !filter_arr.some((item) =>
                item.item_arr.some((item) => item.checked)
            )
        ) {
            return;
        }

        filter_arr.forEach((filter_obj) => {
            filter_obj.item_arr.forEach((item) => {
                item.checked = false;
            });
        });

        getData_Filter({ is_refresh: true });
    }

    //
    return (
        <div className="AllProducts font-14px">
            <div className="margin-bottom-15px padding-15px bg-primary">
                <div className="margin-bottom-10px">
                    <ul className="display-flex flex-wrap list-none">
                        {filter_arr.map((filter_obj, filter_ix) => (
                            <li key={filter_ix} className="padding-5px">
                                <PLFilter
                                    filter_title={filter_obj.title}
                                    has_filter={filter_obj.item_arr.some(
                                        (item) => item.checked
                                    )}
                                >
                                    <PLFilterCommonList
                                        filter_ix={filter_ix}
                                        item_arr={filter_obj.item_arr}
                                        count={filter_result_count}
                                        is_fetching={filter_fetching}
                                        chooseFilterItem={chooseFilterItem}
                                        handleFilter={handleFilter}
                                        clearFilter={clearFilter}
                                    />
                                </PLFilter>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="margin-bottom-10px">
                    <ProductBrands
                        brand_arr={brand_arr}
                        handleChooseBrand={handleChooseBrand}
                    />
                </div>

                <div>
                    <ProductPrices
                        price_arr={price_arr}
                        handleChoosePrice={handleChoosePrice}
                    />
                </div>
            </div>

            <div className="fashion-width">
                <ProductContent
                    products={has_fetched ? data_arr : Array(10).fill({})}
                />
            </div>

            <div className="padding-y-10px text-third">
                <ScreenBlurShowMore
                    title={`Xem thêm ${count - data_arr.length} sản phẩm`}
                    is_fetching={is_fetching}
                    is_show_more={has_fetched && count > data_arr.length}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default AllProducts;
