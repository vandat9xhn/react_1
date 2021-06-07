import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { stringify } from 'query-string';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import Pagination from '../../../../../component/pagination/_main/Pagination';
import WaitingBall from '../../../../../component/waiting/waiting_ball/WaitingBall';
//
import { handle_API_FashionProduct_L } from '../../../__handle_api/home/FashionHandleAPI';
import { initial_fashion_search_products_obj } from '../../../__initial/initial';
//
import './FashionSearch.scss';
import './FashionSearchRes.scss';
//
import FashionShead from '../head/FashionShead';
import SearchProducts from '../products/SearchProducts';
import SearchFilter from '../filter/_main/SearchFilter';

//
FashionSearch.propTypes = {};

//
function FashionSearch(props) {
    //
    const use_history = useHistory();

    //
    const [fashion_search_state, setFashionSearchState] = useState({
        products_obj: initial_fashion_search_products_obj,

        area_arr: [
            { title: 'Ha Noi', checked: false },
            { title: 'HCM', checked: false },
            { title: 'Da Nang', checked: false },
        ],

        page: 1,
        pages: 1,
        value_search: '',
        rate_ix: 0,
        sort_by: '',

        has_fetched: false,
        is_fetching: false,
        open_filter: false,
    });

    const {
        products_obj,
        area_arr,

        page,
        pages,
        value_search,
        rate_ix,
        sort_by,

        has_fetched,
        is_fetching,
        open_filter,
    } = fashion_search_state;

    //
    const is_location_changed = useRef(true);

    //
    useEffect(() => {
        window.scrollTo(0, 0);
        is_location_changed.current && handleChangeLocationSearch();
    }, [location.search]);

    function handleChangeLocationSearch() {
        const { p, q, area, sort, rate } = ParseLocationSearch();
        const new_area_arr = [...area_arr];

        new_area_arr.map((item) => {
            if (
                (area
                    ? typeof area == 'string'
                        ? [area]
                        : area
                    : []
                ).includes(item.title)
            ) {
                item.checked = true;
            } else {
                item.checked = false;
            }

            return item;
        });

        getData_API_Search_Refresh({
            params_api: {
                new_value_search: q,
                new_page: parseInt(p) || 1,
                new_area_arr: new_area_arr,
                new_sort_by: sort || '',
                new_rate_ix: rate || 0,
            },
        });
    }

    /* -------------------- GET API ---------------------*/

    //
    async function getData_API_Search({
        start_obj_state = {},
        params_api = {
            new_value_search: value_search,
            new_page: page,
            new_rate_ix: rate_ix,
            new_sort_by: sort_by,
            new_area_arr: area_arr,
        },
        end_obj_state = {},
    }) {
        const {
            new_value_search = value_search,
            new_page = page,
            new_rate_ix = rate_ix,
            new_sort_by = sort_by,
            new_area_arr = area_arr,
        } = params_api;

        //
        try {
            is_location_changed.current = false;
            setFashionSearchState((fashion_search_state) => ({
                ...fashion_search_state,
                ...start_obj_state,
                rate_ix: new_rate_ix,
                area_arr: new_area_arr,
                sort_by: new_sort_by,
                is_fetching: true,
            }));

            const { data, pages: new_pages } =
                await handle_API_FashionProduct_L(
                    new_page,
                    new_value_search,
                    new_area_arr
                        .filter((item) => item.checked)
                        .map((item) => item.title),
                    new_rate_ix,
                    new_sort_by
                );

            //
            setFashionSearchState((fashion_search_state) => ({
                ...fashion_search_state,
                ...end_obj_state,

                products_obj: fashion_search_state.has_fetched
                    ? {
                          ...fashion_search_state.products_obj,
                          [new_page]: [...data, ...data],
                      }
                    : { [new_page]: [...data, ...data] },

                page: new_page,
                pages: new_pages,
                value_search: new_value_search,

                is_fetching: false,
                has_fetched: true,
            }));

            //
            setTimeout(() => {
                is_location_changed.current = true;
            }, 1);
        } catch (e) {
            console.log(e);
        }
    }

    /* -------------------- COMMON ---------------------*/

    //
    function getData_API_Search_Refresh({
        start_obj_state = {},
        params_api = {
            new_value_search: value_search,
            new_page: page,
            new_rate_ix: rate_ix,
            new_sort_by: sort_by,
            new_area_arr: area_arr,
        },
        end_obj_state = {},
    }) {
        const new_start_obj_state = {
            ...start_obj_state,
            has_fetched: false,
            page: has_fetched ? 1 : params_api.new_page,
            pages: 1,
        };

        const new_params_api = {
            ...params_api,
            new_page: has_fetched ? 1 : params_api.new_page,
        };

        const new_end_obj_state = {
            ...end_obj_state,
        };

        getData_API_Search({
            start_obj_state: new_start_obj_state,
            params_api: new_params_api,
            end_obj_state: new_end_obj_state,
        });
    }

    //
    function getStringParamsSearch({
        new_value_search = value_search,
        new_area_arr = area_arr,
        new_rate_ix = rate_ix,
        new_sort_by = sort_by,
    }) {
        const params = {};
        const new_area_title_arr = new_area_arr
            .filter((item) => !!item.checked)
            .map((item) => item.title);

        new_area_title_arr && (params['area'] = new_area_title_arr);
        new_rate_ix && (params['rate'] = new_rate_ix);
        new_sort_by && (params['sort'] = new_sort_by);

        return (
            location.pathname +
            '?' +
            stringify({
                q: new_value_search,
                ...params,
            })
        );
    }

    //
    function historyPushSearch({
        new_value_search = value_search,
        new_area_arr = area_arr,
        new_rate_ix = rate_ix,
        new_sort_by = sort_by,
    }) {
        use_history.push(
            getStringParamsSearch({
                new_value_search,
                new_area_arr,
                new_rate_ix,
                new_sort_by,
            })
        );
    }

    /* -------------------- SEARCH ---------------------*/

    //
    function handleSearchFashion(new_value_search) {
        if (new_value_search == value_search) {
            return;
        }

        use_history.push(location.pathname + '?q=' + new_value_search);
    }

    /* -------------------- PAGE ---------------------*/

    //
    function handleChangePage(new_page) {
        history.pushState(
            '',
            value_search,
            getStringParamsSearch({}) + '&p=' + new_page
        );

        //
        if (products_obj[new_page]) {
            is_location_changed.current = false;

            setFashionSearchState({
                ...fashion_search_state,
                page: new_page,
            });

            setTimeout(() => {
                is_location_changed.current = true;
            }, 1);
        }
        //
        else {
            const start_obj_state = {
                page: new_page,
                products_obj: {
                    ...products_obj,
                    [new_page]: [],
                },
            };

            const params_api = {
                new_page: new_page,
            };

            getData_API_Search({ start_obj_state, params_api });
        }
    }

    /* -------------------- FILTER ---------------------*/

    //
    function openFilter() {
        setFashionSearchState({
            ...fashion_search_state,
            open_filter: true,
        });
    }

    //
    function closeFilter() {
        setFashionSearchState({
            ...fashion_search_state,
            open_filter: false,
        });
    }

    //
    function handleAreaChecked(area_ix) {
        const new_area_arr = [...area_arr];
        new_area_arr[area_ix].checked = !new_area_arr[area_ix].checked;

        historyPushSearch({
            new_area_arr: new_area_arr,
        });
    }

    //
    function handleFilterRate(new_rate_ix) {
        if (new_rate_ix == rate_ix) {
            return;
        }

        historyPushSearch({
            new_rate_ix: new_rate_ix,
        });
    }

    //
    function handleFilterSort(new_sort_by) {
        if (new_sort_by == sort_by) {
            return;
        }

        historyPushSearch({
            new_sort_by: new_sort_by,
        });
    }

    //
    return (
        <div>
            <FashionShead handleSearchFashion={handleSearchFashion} />

            <div className="FashionSearch_row display-flex">
                <div className="FashionSearch_open-filter">
                    <div
                        className="FashionSearch_open-filter-btn label-field"
                        onClick={openFilter}
                    >
                        Filter
                    </div>
                </div>

                <div
                    className={`FashionSearch_filter ${
                        open_filter
                            ? 'FashionSearch_filter-open'
                            : 'FashionSearch_filter-close'
                    }`}
                >
                    <div className="FashionSearch_filter-icon-close">
                        <div
                            className="close-icon-small brs-50 cursor-pointer"
                            onClick={closeFilter}
                        >
                            <IconsArrow y={400} size_icon="1rem" />
                        </div>
                    </div>

                    <SearchFilter
                        area_arr={area_arr}
                        rate_ix={rate_ix}
                        sort_by={sort_by}
                        //
                        handleAreaChecked={handleAreaChecked}
                        handleFilterRate={handleFilterRate}
                        handleFilterSort={handleFilterSort}
                    />
                </div>

                <div className="position-rel flex-grow-1">
                    <div
                        className={`FashionSearch_product ${
                            is_fetching || !has_fetched ? 'display-none' : ''
                        }`}
                    >
                        <div>
                            <SearchProducts
                                products={has_fetched ? products_obj[page] : []}
                            />
                        </div>

                        <div className="FashionSearch_pagination">
                            <Pagination
                                current={has_fetched ? page : 1}
                                count={has_fetched ? pages : 1}
                                num_side_center={2}
                                handleChangePage={handleChangePage}
                            />
                        </div>
                    </div>

                    <div className="FashionSearch_fetching position-abs width-fit-content margin-auto">
                        <WaitingBall
                            is_fetching={is_fetching || !has_fetched}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionSearch;
