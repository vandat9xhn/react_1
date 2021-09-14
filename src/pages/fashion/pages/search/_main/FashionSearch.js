import React, { useEffect, useState } from 'react';
import { stringify } from 'query-string';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import Pagination from '../../../../../component/pagination/_main/Pagination';
import WaitingBall from '../../../../../component/waiting/waiting_ball/WaitingBall';
//
import {
    FsSearch_FULL_KEY_SORT_ARR,
    FsSearch_FULL_SORT_ARR,
    FsSearch_getData_API,
    FsSearch_initial_state_obj,
    FsSearch_SORT_ARR,
    FsSearch_SORT_PRICE_ARR,
    getSortBy,
} from '../_state/_FsSearch_handleDataState';
//
import FashionShead from '../head/FashionShead';
import FsRowSort from '../../../components/row_sort/_main/FsRowSort';
import SearchProducts from '../products/SearchProducts';
import SearchFilter from '../filter/_main/SearchFilter';
import FsSearchTitleFor from '../title_for/FsSearchTitleFor';
//
import './FashionSearch.scss';
import './FashionSearchMb.scss';
import { useMounted } from '../../../../../_hooks/useMounted';

//
FashionSearch.propTypes = {};

//
function FashionSearch(props) {
    //
    const [state_obj, setStateObj] = useState(FsSearch_initial_state_obj());

    const {
        product_arr,

        filter_arr,
        value_search,
        min_price,
        max_price,
        rate_ix,
        sort_ix,

        page,
        pages,

        has_fetched,
        is_fetching,
        open_filter,
    } = state_obj;

    //
    const forceUpdate = useForceUpdate();
    const mounted = useMounted();

    //
    useEffect(() => {
        if (mounted) {
            window.scrollTo(0, 0);
            FsSearch_getData_API({ setStateObj: setStateObj });
        }
    }, [location.search]);

    // ------- COMMON

    //
    function getStringParamsSearch({
        new_value_search = value_search,
        new_filter_arr = filter_arr,
        new_rate_ix = rate_ix,
        new_min_price = min_price,
        new_max_price = max_price,
        new_sort_ix = sort_ix,
        new_page = page,
    }) {
        const params = {};
        const new_sort_by = getSortBy(new_sort_ix);

        new_rate_ix && (params['rate'] = new_rate_ix);
        new_sort_by && (params['sort'] = new_sort_by);
        new_min_price && (params['min_price'] = new_min_price);
        new_max_price && (params['max_price'] = new_max_price);

        new_filter_arr.forEach((filter_obj) => {
            params[filter_obj.name] = filter_obj.arr
                .filter((item) => item.checked)
                .map((item) => item.id);
        });

        return (
            location.pathname +
            '?' +
            stringify({
                ...params,
                q: new_value_search,
                page: new_page,
            })
        );
    }

    //
    function historyPushSearch({
        new_value_search = value_search,
        new_filter_arr = filter_arr,
        new_min_price = min_price,
        new_max_price = max_price,
        new_rate_ix = rate_ix,
        new_sort_ix = sort_ix,
        new_page = page,
    }) {
        history.pushState(
            '',
            new_value_search,
            getStringParamsSearch({
                new_value_search,
                new_filter_arr,
                new_min_price,
                new_max_price,
                new_rate_ix,
                new_sort_ix,
                new_page,
            })
        );

        forceUpdate();
    }

    // -------- SEARCH + PAGE

    //
    function handleSearchFashion(new_value_search) {
        if (new_value_search == value_search) {
            return;
        }

        historyPushSearch({
            new_value_search: new_value_search,
            new_filter_arr: [],
            new_rate_ix: 0,
            new_page: 1,
        });
    }

    //
    function handleChangePage(new_page) {
        if (new_page == page) {
            return;
        }

        historyPushSearch({
            new_page: new_page,
        });
    }

    //
    function handleNext() {
        page < pages && handleChangePage(page + 1);
    }

    //
    function handlePrev() {
        page >= 2 && handleChangePage(page - 1);
    }

    // ----- TOGGLE FILTER FOR MOBILE

    //
    function openFilter() {
        setStateObj({
            ...state_obj,
            open_filter: true,
        });
    }

    //
    function closeFilter() {
        setStateObj({
            ...state_obj,
            open_filter: false,
        });
    }

    // ----- FILTER

    //
    function handleFilterChecked({ filter_ix, item_ix }) {
        const new_filter_arr = [...filter_arr];
        new_filter_arr[filter_ix].arr[item_ix].checked =
            !new_filter_arr[filter_ix].arr[item_ix].checked;

        historyPushSearch({
            new_filter_arr: new_filter_arr,
            new_page: 1,
        });
    }

    //
    function handleFilterRate(new_rate_ix) {
        if (new_rate_ix == rate_ix) {
            return;
        }

        historyPushSearch({
            new_rate_ix: new_rate_ix,
            new_page: 1,
        });
    }

    //
    function handleApplyPriceMinMax({ new_min_price, new_max_price }) {
        if (new_max_price == min_price && new_max_price == max_price) {
            return;
        }

        historyPushSearch({
            new_min_price: new_min_price,
            new_max_price: new_max_price,
            new_page: 1,
        });
    }

    //
    function handleClearFilter() {
        historyPushSearch({
            new_filter_arr: [],
            new_min_price: 0,
            new_max_price: 0,
            new_rate_ix: 0,
            new_page: 1,
        });
    }

    // ------- SORT

    //
    function handleSort(new_sort_ix) {
        if (new_sort_ix == sort_ix) {
            return;
        }

        historyPushSearch({
            new_sort_ix: new_sort_ix,
        });
    }

    //
    function handleSortPrice(new_sort_price_ix) {
        const new_sort_ix = new_sort_price_ix + FsSearch_SORT_ARR.length;
        handleSort(new_sort_ix);
    }

    //
    return (
        <div
            className={`FashionSearch ${
                IS_MOBILE ? 'FashionSearch-mobile' : ''
            }`}
        >
            <div className="margin-bottom-20px">
                <FashionShead handleSearchFashion={handleSearchFashion} />
            </div>

            <div
                className={`fashion-width font-for-fashion ${
                    !has_fetched ? 'display-none' : ''
                }`}
            >
                {IS_MOBILE ? (
                    <div className="FashionSearch_filter_btn">
                        <div
                            className="margin-right-15px margin-left-auto width-fit-content padding-8px font-500 cursor-pointer"
                            onClick={openFilter}
                        >
                            Filter
                        </div>
                    </div>
                ) : null}

                <div className="FashionSearch_row display-flex">
                    <div
                        className={`FashionSearch_filter margin-right-20px ${
                            open_filter
                                ? 'FashionSearch_filter-open display-none'
                                : 'FashionSearch_filter-close'
                        }`}
                    >
                        <div className="FashionSearch_filter-icon-close display-none">
                            <div
                                className="close-icon-small brs-50 cursor-pointer"
                                onClick={closeFilter}
                            >
                                <IconsArrow y={400} size_icon="1rem" />
                            </div>
                        </div>

                        <SearchFilter
                            filter_arr={filter_arr}
                            sort_arr={FsSearch_FULL_SORT_ARR}
                            //
                            min_price={min_price}
                            max_price={max_price}
                            rate_ix={rate_ix}
                            sort_ix={sort_ix}
                            //
                            handleFilterChecked={handleFilterChecked}
                            handleFilterRate={handleFilterRate}
                            handleApplyPriceMinMax={handleApplyPriceMinMax}
                            handleSort={handleSort}
                            handleClearFilter={handleClearFilter}
                        />
                    </div>

                    <div className="pos-rel flex-grow-1">
                        <div className="margin-bottom-20px">
                            <FsSearchTitleFor value_search={value_search} />
                        </div>

                        {IS_MOBILE ? null : (
                            <div className="margin-bottom-15px">
                                <FsRowSort
                                    sort_arr={FsSearch_SORT_ARR}
                                    sort_price_arr={FsSearch_SORT_PRICE_ARR}
                                    sort_ix={sort_ix}
                                    sort_price_ix={
                                        sort_ix - FsSearch_SORT_ARR.length
                                    }
                                    //
                                    page={page}
                                    pages={pages}
                                    is_fetching={is_fetching}
                                    //
                                    handleSort={handleSort}
                                    handleSortPrice={handleSortPrice}
                                    handleNext={handleNext}
                                    handlePrev={handlePrev}
                                />
                            </div>
                        )}

                        <div
                            className={`FashionSearch_product ${
                                is_fetching ? 'display-none' : ''
                            }`}
                        >
                            <div className="margin-bottom-15px">
                                <SearchProducts products={product_arr} />
                            </div>

                            <div>
                                <Pagination
                                    current={page}
                                    count={pages}
                                    num_side_center={2}
                                    handleChangePage={handleChangePage}
                                />
                            </div>
                        </div>

                        <div
                            className={`${is_fetching ? 'height-100vh' : ''}`}
                        ></div>
                    </div>
                </div>
            </div>

            <div
                className={`pos-fixed-100per bg-shadow-2 z-index-lv5 ${
                    is_fetching ? '' : 'display-none'
                }`}
            >
                <div className="pos-abs-center">
                    <WaitingBall is_fetching={is_fetching} />
                </div>
            </div>
        </div>
    );
}

export default FashionSearch;
