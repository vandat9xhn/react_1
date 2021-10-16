import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    initial_pl_phones_state,
    PL_PHONES_MAX_PRICE,
    PL_PHONES_MIN_PRICE,
    PL_PHONES_SORT_ARR,
} from '../../../../../_initial/phone/pl_phones';
//
import { useMounted } from '../../../../../_hooks/useMounted';
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import {
    getDataMore_PLFilter,
    PLPhones_getData_API,
} from '../_state/_PLPhones_dataState';
//
import { PLPhones_ChooseFilterItem } from '../_state/PLPhones_ChooseFilterItem';
import { PLPhones_toggleFilterPrice } from '../_state/PLPhones_toggleFilterPrice';
import { PLPhones_getData_Filter } from '../_state/PLPhones_Filter';
import {
    PLPhones_clearAllFilter,
    PLPhones_clearFilter,
    PLPhones_clearFilterPriceCustom,
} from '../_state/PLPhone_clearFilter';
import { PLPhones_selectSort } from '../_state/PLPhones_selectSort';
import { PLPhones_checkFilter } from '../_state/PLPhones_checkFilter';
//
import PLFilter from '../../../components/filter/_main/PLFilter';
import PLFilterCommonList from '../../../components/filter/common_list/PLFilterCommonList';
import ProductBrands from '../../../components/brands/_main/PLBrands';
import PLPhonesSort from '../sort/PLPhonesSort';
import PLAllProductList from '../../../components/list/PLAllProductList';
import PLFilterPrices from '../../../components/filter_price/_main/PLFilterPrices';
import PLPhonesFilterSummary from '../filter_summary/_main/PLPhonesFilterSummary';
//
import './PLPhones.scss';
import './PLPhonesRes.scss';

import '../_mobile_css/_PLPhonesMb.scss';
import '../_mobile_css/PLFilterMb.scss';
import '../_mobile_css/PLFilterSumCommonListMb.scss';
import '../_mobile_css/PLFilterSummaryMb.scss';
import '../_mobile_css/PLPhonesFilterSummaryMb.scss';
import '../_mobile_css/PLPhonesSortMb.scss';

//
PLPhones.propTypes = {};

PLPhones.defaultProps = {};

//
function PLPhones(props) {
    //
    const [state_obj, setStateObj] = useState(initial_pl_phones_state());

    const {
        filter_arr,
        filter_count,
        filter_result_count,
        filter_fetching,

        filter_check_arr,
        sort_ix,

        product_arr,
        count,
        is_fetching,
        has_fetched,

        is_price_custom,
        price_custom_1,
        price_custom_2,
    } = state_obj;

    //
    const mounted = useMounted();
    const forceUpdate = useForceUpdate();

    //
    const ref_filter_elm = useRef(null);

    //
    useEffect(() => {
        PLPhones_getData_API({
            setStateObj: setStateObj,
            mounted: mounted,
        });
    }, [location.search]);

    //
    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, []);

    // ----
    function handleWindowScroll() {
        if (ref_filter_elm.current.getBoundingClientRect().top <= 0) {
            ref_filter_elm.current.style.boxShadow = 'var(--box-shadow-fb)';
        } else {
            ref_filter_elm.current.style.boxShadow = 'none';
        }
    }

    // ----- CHOOSE

    //
    function chooseFilterItem({ filter_ix, item_ix }) {
        PLPhones_ChooseFilterItem({
            setStateObj: setStateObj,
            state_obj: state_obj,
            filter_ix: filter_ix,
            item_ix: item_ix,
        });
    }

    //
    function handleChooseBrand(brand_ix) {
        history.pushState(
            '',
            '',
            `?brand=${filter_arr[0].item_arr[brand_ix].filter_key}`
        );
        forceUpdate();
    }

    // ----- PRICE

    //
    function toggleFilterPrice() {
        PLPhones_toggleFilterPrice({
            state_obj: state_obj,
            setStateObj: setStateObj,
        });
    }

    //
    function changePrice1(new_price_1 = 0) {
        PLPhones_getData_Filter({
            setStateObj: setStateObj,
            filter_count: filter_count,
            filter_arr: filter_arr,

            is_price_custom: true,
            price_custom_1: new_price_1,
            price_custom_2: price_custom_2,
        });
    }

    //
    function changePrice2(new_price_2 = 0) {
        PLPhones_getData_Filter({
            setStateObj: setStateObj,
            filter_count: filter_count,
            filter_arr: filter_arr,

            is_price_custom: true,
            price_custom_1: price_custom_1,
            price_custom_2: new_price_2,
        });
    }

    // -----

    //
    function clearFilter(filter_ix = 0) {
        PLPhones_clearFilter({
            state_obj: state_obj,
            filter_ix: filter_ix,
            forceUpdate: forceUpdate,
        });
    }

    //
    function clearFilterPrice() {
        if (is_price_custom) {
            PLPhones_clearFilterPriceCustom({
                state_obj: state_obj,
                forceUpdate: forceUpdate,
            });
        } else {
            clearFilter(1);
        }
    }

    //
    function handleFilter() {
        clearFilter(-1);
    }

    //
    function clearAllFilter() {
        PLPhones_clearAllFilter({ forceUpdate: forceUpdate });
    }

    // ----- SORT

    //
    function selectSort(new_sort_ix = 0) {
        PLPhones_selectSort({
            new_sort_ix: new_sort_ix,
            forceUpdate: forceUpdate,
        });
    }

    //
    function checkFilter(filter_check_ix = 0) {
        PLPhones_checkFilter({
            filter_check_arr: filter_check_arr,
            filter_check_ix: filter_check_ix,
            forceUpdate: forceUpdate,
        });
    }

    // -----

    //
    function handleShowMore() {
        getDataMore_PLFilter({
            setStateObj: setStateObj,
            c_count: product_arr.length,
        });
    }

    // console.log(is_price_custom);
    //
    return (
        <div className="PLPhones bg-primary font-14px font-for-phone">
            <div
                ref={ref_filter_elm}
                className="PLPhones_filter pos-sticky top-0 left-0 margin-bottom-15px w-100per padding-y-5px bg-primary user-select-none"
            >
                <ul className="PLPhones_filter_row display-flex flex-wrap fashion-width list-none">
                    <li className="PLPhones_filter_summary padding-5px">
                        <PLPhonesFilterSummary
                            filter_arr={filter_arr}
                            filter_count={filter_count}
                            filter_result_count={filter_result_count}
                            filter_fetching={filter_fetching}
                            //
                            is_price_custom={is_price_custom}
                            price_custom_1={price_custom_1}
                            price_custom_2={price_custom_2}
                            price_custom_min={PL_PHONES_MIN_PRICE}
                            price_custom_max={PL_PHONES_MAX_PRICE}
                            //
                            toggleFilterPrice={toggleFilterPrice}
                            changePrice1={changePrice1}
                            changePrice2={changePrice2}
                            //
                            chooseFilterItem={chooseFilterItem}
                            handleFilter={handleFilter}
                            clearAllFilter={clearAllFilter}
                        />
                    </li>

                    <li className="padding-5px">
                        <PLFilter
                            filter_title={
                                filter_arr[0].c_title || filter_arr[0].title
                            }
                            has_filter={filter_arr[0].item_arr.some(
                                (item) => item.checked
                            )}
                        >
                            <PLFilterCommonList
                                filter_ix={0}
                                item_arr={filter_arr[0].item_arr}
                                filter_count={filter_count}
                                filter_result_count={filter_result_count}
                                is_fetching={filter_fetching}
                                chooseFilterItem={chooseFilterItem}
                                handleFilter={handleFilter}
                                clearFilter={clearFilter}
                            />
                        </PLFilter>
                    </li>

                    <li className="padding-5px">
                        <PLFilter
                            filter_title={
                                filter_arr[1].c_title || filter_arr[1].title
                            }
                            has_filter={
                                is_price_custom ||
                                filter_arr[1].item_arr.some(
                                    (item) => item.checked
                                )
                            }
                        >
                            <PLFilterPrices
                                price_arr={filter_arr[1].item_arr}
                                is_price_custom={is_price_custom}
                                price_custom_1={price_custom_1}
                                price_custom_2={price_custom_2}
                                price_custom_min={PL_PHONES_MIN_PRICE}
                                price_custom_max={PL_PHONES_MAX_PRICE}
                                //
                                filter_result_count={filter_result_count}
                                filter_fetching={filter_fetching}
                                filter_count={filter_count}
                                //
                                chooseFilterPrice={chooseFilterItem}
                                toggleFilterPrice={toggleFilterPrice}
                                changePrice1={changePrice1}
                                changePrice2={changePrice2}
                                //
                                handleFilter={handleFilter}
                                clearFilterPrice={clearFilterPrice}
                            />
                        </PLFilter>
                    </li>

                    {filter_arr.slice(2).map((filter_obj, filter_ix) => (
                        <li key={filter_ix} className="padding-5px">
                            <PLFilter
                                filter_title={
                                    filter_obj.c_title || filter_obj.title
                                }
                                has_filter={filter_obj.item_arr.some(
                                    (item) => item.checked
                                )}
                            >
                                <PLFilterCommonList
                                    filter_ix={filter_ix + 2}
                                    item_arr={filter_obj.item_arr}
                                    filter_count={filter_count}
                                    filter_result_count={filter_result_count}
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

            {!location.search ? (
                <div className="fashion-width padding-bottom-15px">
                    <ProductBrands
                        brand_arr={filter_arr[0].item_arr}
                        handleChooseBrand={handleChooseBrand}
                    />
                </div>
            ) : null}

            <div className="fashion-width padding-bottom-15px">
                <PLPhonesSort
                    count={count}
                    filter_check_arr={filter_check_arr}
                    sort_arr={PL_PHONES_SORT_ARR}
                    sort_ix={sort_ix}
                    //
                    checkFilter={checkFilter}
                    selectSort={selectSort}
                />
            </div>

            <div className="fashion-width">
                <PLAllProductList
                    products={has_fetched ? product_arr : Array(10).fill({})}
                />
            </div>

            <div className="fashion-width padding-y-10px text-third">
                <ScreenBlurShowMore
                    title={`Xem thêm ${count - product_arr.length} sản phẩm`}
                    is_fetching={is_fetching}
                    is_show_more={has_fetched && count > product_arr.length}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default PLPhones;
