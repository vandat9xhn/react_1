import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { initial_phone_arr } from '../../../../_initial/phone/InitialPhone';
//
import { data_phone_sort_arr } from '../../../../_data/phone/sort';
//
import ScreenBlurShowMore from '../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import {
    addOrRemoveItem,
    ListOrEmpty,
    ListOrEmptyNumber,
    ListOrRegex,
} from '../../__func/AllProductsFunc';
//
import './AllProducts.scss';
//
import ProductBrands from '../brands/_main/PLBrands';
import ProductSearch from '../search_row/_main/ProductSearch';
import ProductContent from '../content/ProductContent';
import ProductCFilter from '../current_filter/_main/ProductCFilter';
import ProductPrices from '../prices/_main/PLPrices';
//
import './AllProductsRes.scss';
import { useDataShowMore } from '../../../../_hooks/useDataShowMore';
import { ParseLocationSearch } from '../../../../_some_function/ParseLocationSearch';
import { useMounted } from '../../../../_hooks/useMounted';
import PLFilter from '../filter/_main/PLFilter';
import PLFilterCommonList from '../filter/common_list/PLFilterCommonList';
import { useHistory } from 'react-router-dom';
import { stringify } from 'query-string';

//
function changeNewSearchObj(new_search_obj = {}, arr = [], search_key = '') {
    const search_str = arr
        .filter((item) => item.checked)
        .map((item) => item.filter_key)
        .join(',');

    if (search_str) {
        new_search_obj[search_key] = search_str;
    }
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
    const use_history = useHistory();

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

    //
    useEffect(() => {
        if (mounted) {
            refreshData_API();
        }
    }, [location.search]);

    // -----

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
    async function getData_Filter(new_checked = true) {
        setDataState((data_state) => {
            return {
                ...data_state,
                filter_count: data_state.filter_count + new_checked * 1,
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

    // -----

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

        console.log(price_arr);
        handleFilter();
    }

    //
    function chooseFilterItem({ filter_ix, item_ix }) {
        const new_checked = !filter_arr[filter_ix].item_arr[item_ix].checked;

        filter_arr[filter_ix].item_arr[item_ix].checked = new_checked;
        getData_Filter(new_checked);
    }

    //
    function handleFilter() {
        let new_search_obj = {};

        changeNewSearchObj(new_search_obj, brand_arr, 'brand');
        changeNewSearchObj(new_search_obj, price_arr, 'price');

        filter_arr.forEach((filter_obj) => {
            changeNewSearchObj(
                new_search_obj,
                filter_obj.item_arr,
                filter_obj.name
            );
        });

        const new_search = stringify(new_search_obj);
        use_history.push(`${location.pathname}?${new_search}`);
    }

    //
    function clearFilter() {
        use_history.push(location.pathname);
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
