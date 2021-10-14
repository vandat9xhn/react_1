import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { stringify } from 'query-string';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import { API_PhoneLaptop_L } from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { useMounted } from '../../../../../_hooks/useMounted';
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import PLFilter from '../../filter/_main/PLFilter';
import PLFilterCommonList from '../../filter/common_list/PLFilterCommonList';
import PLBtnFilterSummary from '../../btn_filter_summary/PLBtnFilterSummary';
import ProductBrands from '../../brands/_main/PLBrands';
import PLAllProductList from '../../list/PLAllProductList';
import PLFilterPrices from '../../filter_price/_main/PLFilterPrices';
//
import './AllProducts.scss';
import './AllProductsRes.scss';

//
function getSearchArr(arr = []) {
    return arr.filter((item) => item.checked).map((item) => item.filter_key);
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
    let filter_count = 0;
    const filter_title_arr = [];

    if (!has_filter_key) {
        filter_item_arr.forEach((item) => {
            item.checked = false;
        });

        return { filter_count };
    }

    filter_item_arr.forEach((item) => {
        if (filter_key_arr.includes(item.filter_key)) {
            item.checked = true;
            filter_title_arr.push(item.title);
            filter_count += 1;
        } else {
            item.checked = false;
        }
    });

    return {
        filter_count,
        filter_title:
            filter_title_arr[0] + filter_title_arr.length >= 2 ? ',...' : '',
    };
}

//
const price_custom_obj = (price_1, price_2) => {
    return {
        title: `${price_1}-${price_2}`,
        checked: true,
        filter_key: 'price_custom',
    };
};

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

    brand_arr: old_brand_arr,
    filter_arr: old_filter_arr,
    filter_price_obj: old_filter_price_obj,
    price_custom_max,
    price_custom_min,
}) {
    //
    const [state_obj, setStateObj] = useState({
        product_arr: [],
        count: 0,
        is_fetching: false,
        has_fetched: false,

        filter_count: 0,
        filter_result_count: 0,
        filter_fetching: false,

        is_price_custom: false,
        price_custom_1: price_custom_min,
        price_custom_2: price_custom_max,
    });

    const {
        product_arr,
        count,
        is_fetching,
        has_fetched,

        filter_count,
        filter_result_count,
        filter_fetching,

        is_price_custom,
        price_custom_1,
        price_custom_2,
    } = state_obj;

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
    async function getData_PhoneLaptop(is_refresh = false) {
        setStateObj((state_obj) => {
            const start_obj_state = is_refresh
                ? {
                      product_arr: [],
                      has_fetched: false,
                  }
                : {};

            return {
                ...state_obj,
                is_fetching: true,
                ...start_obj_state,
            };
        });

        const { data, count: new_count } = await handle_API_PhoneLaptop_L(
            product_arr.length
        );

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                product_arr: [...state_obj.product_arr, ...data],
                count: state_obj.has_fetched ? state_obj.count : new_count,
                is_fetching: false,
                has_fetched: true,
            };
        });
    }

    //
    async function getData_Filter({ new_checked = true, is_refresh = false }) {
        const new_filter_count = filter_count + (new_checked ? 1 : -1);

        if (new_filter_count == 0) {
            setDataState((data_state) => {
                return {
                    ...data_state,
                    filter_count: 0,
                    filter_result_count: 0,
                    filter_fetching: false,
                };
            });

            return;
        }

        // ---

        setDataState((data_state) => {
            return {
                ...data_state,
                filter_count: is_refresh
                    ? 0
                    : data_state.filter_count + (new_checked ? 1 : -1),
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

    // ------

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleFilter() {
        let new_search_obj = {};

        [
            { item_arr: brand_arr, name: 'brand' },
            {
                item_arr: [
                    ...filter_price_obj.item_arr,
                    is_price_custom
                        ? [price_custom_obj(price_custom_1, price_custom_2)]
                        : [],
                ],
                name: 'price',
            },
            ...filter_arr,
        ].forEach((filter_obj) => {
            const search_arr = getSearchArr(filter_obj.item_arr);
            new_search_obj[filter_obj.name] = search_arr;
        });

        const new_search = stringify(new_search_obj);
        history.pushState('', '', `${location.pathname}?${new_search}`);
        forceUpdate();
    }

    //
    function handleRefresh() {
        let new_filter_count = 0;
        const new_search_obj = ParseLocationSearch();

        [
            { item_arr: brand_arr, name: 'brand' },
            {
                item_arr: [
                    ...filter_price_obj.item_arr,
                    is_price_custom
                        ? [price_custom_obj(price_custom_1, price_custom_2)]
                        : [],
                ],
                name: 'price',
            },
            ...filter_arr,
        ].forEach((filter_obj) => {
            const { filter_count: filter_item_count, filter_title } =
                changeFilterArr({
                    filter_item_arr: filter_obj.item_arr,
                    ...handleFilterKey({
                        search_key: filter_obj.name,
                        new_search_obj: new_search_obj,
                    }),
                });

            filter_obj.c_title = filter_title;
            new_filter_count += filter_item_count;
        });

        getData_PhoneLaptop(true);
    }

    // ----- CHOOSE

    //
    function handleChooseBrand(brand_ix) {
        const new_checked = !brand_arr[brand_ix].checked;

        brand_arr[brand_ix].checked = new_checked;
        handleFilter();
    }

    //
    function chooseFilterItem({ filter_ix, item_ix }) {
        const new_checked = !filter_arr[filter_ix].item_arr[item_ix].checked;

        filter_arr[filter_ix].item_arr[item_ix].checked = new_checked;
        getData_Filter({ new_checked: new_checked });
    }

    // ----- PRICE

    //
    function toggleFilterPrice() {
        setDataState((data_state) => {
            return {
                ...data_state,
                is_price_custom: !data_state.is_price_custom,
            };
        });
    }

    // -----

    //
    function openFilterSummary() {
        console.log('filter summary');
    }

    //
    function clearFilter(filter_ix = -1) {
        const filter_obj = filter_arr[filter_ix];

        if (!filter_obj.item_arr.some((item) => item.checked)) {
            return;
        }

        filter_obj.item_arr.forEach((item) => {
            item.checked = false;
        });

        getData_PhoneLaptop({ is_refresh: true });
    }

    //
    function clearAllFilter() {
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

        getData_PhoneLaptop({ is_refresh: true });
    }

    //
    return (
        <div className="AllProducts fashion-width font-14px">
            <div className="padding-y-15px user-select-none">
                <div className="margin-bottom-10px">
                    <ul className="display-flex flex-wrap list-none">
                        <li className="padding-5px">
                            <PLBtnFilterSummary
                                filter_count={filter_count}
                                handleClick={openFilterSummary}
                            />
                        </li>

                        <li className="padding-5px">
                            <PLFilter
                                filter_title={
                                    filter_price_obj.c_title ||
                                    filter_price_obj.title
                                }
                                pos_left={filter_price_obj.pos_left}
                                has_filter={filter_price_obj.item_arr.some(
                                    (item) => item.checked
                                )}
                            >
                                <PLFilterPrices
                                    price_arr={filter_price_obj.item_arr}
                                    is_price_custom={is_price_custom}
                                    price_custom_1={price_custom_1}
                                    price_custom_2={price_custom_2}
                                    price_custom_max={price_custom_max}
                                    price_custom_min={price_custom_min}
                                    //
                                    chooseFilterPrice={chooseFilterPrice}
                                    toggleFilterPrice={toggleFilterPrice}
                                    changePrice1={changePrice1}
                                    changePrice2={changePrice2}
                                    handleMouseMovePrice={handleMouseMovePrice}
                                    handleMouseEndPrice={handleMouseEndPrice}
                                />
                            </PLFilter>
                        </li>

                        {filter_arr.map((filter_obj, filter_ix) => (
                            <li key={filter_ix} className="padding-5px">
                                <PLFilter
                                    filter_title={
                                        filter_obj.c_title || filter_obj.title
                                    }
                                    pos_left={filter_obj.pos_left}
                                    has_filter={filter_obj.item_arr.some(
                                        (item) => item.checked
                                    )}
                                >
                                    <PLFilterCommonList
                                        filter_ix={filter_ix}
                                        item_arr={filter_obj.item_arr}
                                        filter_count={filter_count}
                                        filter_result_count={
                                            filter_result_count
                                        }
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
            </div>

            <div>
                <PLAllProductList
                    products={has_fetched ? product_arr : Array(10).fill({})}
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
