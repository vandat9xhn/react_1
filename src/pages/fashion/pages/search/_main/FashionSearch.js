import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionProduct_L } from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
//
import Pagination from '../../../../../component/pagination/_main/Pagination';
//
import FashionHSearch from '../../../components/head/_main_search/FashionHSearch';
import SearchProducts from '../products/SearchProducts';
import SearchFilter from '../filter/_main/SearchFilter';
//
import './FashionSearch.scss';
import './FashionSearchRes.scss';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';

//
function FashionSearch(props) {
    // state
    const [products_obj, setProductsObj] = useState({});
    const [search_obj, setSearchObj] = useState({
        value_search: '',
        cur_page: 1,
        pages: 1,
    });

    const [area_arr, setAreaArr] = useState([
        { title: 'Ha Noi', checked: false },
        { title: 'HCM', checked: false },
        { title: 'Da Nang', checked: false },
    ]);
    const [active_rate_ix, setActiveRateIx] = useState(0);
    const [cur_sort_by, setCurSortBy] = useState('');

    const [open_filter, setOpenFilter] = useState(false);
    //
    const is_location_changed = useRef(true);

    // effect
    useEffect(() => {
        document.title = ParseLocationSearch()['q'];
        is_location_changed.current && handleChangeLocationSearch();
    }, [location.search]);

    /* ----------------------- FUNC FOR USE EFFECT -------------------------- */

    //
    function handleChangeLocationSearch() {
        const location_search_obj = ParseLocationSearch();
        const new_search_text = location_search_obj['q'];
        const new_cur_page = parseInt(location_search_obj['p']) || 1;
        //
        getData_API_Search(new_search_text, new_cur_page);
    }

    /* -------------------- GET API ---------------------*/

    //
    async function getData_API_Search(
        new_search_text,
        new_page,
        new_rate_ix = active_rate_ix,
        new_sort_by = cur_sort_by
    ) {
        is_location_changed.current = false;
        //
        try {
            const res = await API_FashionProduct_L({
                page: new_page,
                size: 10,
                search: new_search_text,
                area: area_arr
                    .filter((item) => item.checked)
                    .map((item) => item.title),
                rate: new_rate_ix,
                sort_by: new_sort_by,
            });
            //
            products_obj[new_page] = res.data.data;
            setSearchObj((search_obj) => ({
                ...search_obj,
                cur_page: new_page,
                pages: res.data.pages,
                value_search: new_search_text,
            }));
            //
            setTimeout(() => {
                is_location_changed.current = true;
            }, 1);
        
        } catch (e) {
            console.log(e);
        }
    }

    /* -------------------- SEARCH HEAD + PAGE ---------------------*/

    //
    function handleChangeValueSearch(e) {
        setSearchObj((search_obj) => ({
            ...search_obj,
            value_search: e.target.value,
        }));
    }

    //
    function handleSearchFashion(new_key_search) {
        if (new_key_search != ParseLocationSearch()['q']) {
            history.pushState(
                '',
                value_search,
                '/fashion/search?q=' + new_key_search
            );
            getData_API_Search(new_key_search, 1);
        }
    }

    //
    function handleChangePage(new_page) {
        history.pushState(
            '',
            value_search,
            '/fashion/search?q=' + value_search + '&p=' + new_page
        );
        //
        if (products_obj[new_page]) {
            setSearchObj((search_obj) => ({
                ...search_obj,
                cur_page: new_page,
            }));
        } else {
            getData_API_Search(value_search, new_page);
        }
    }

    /* -------------------- SEARCH + FILTER ---------------------*/

    //
    function handleAreaChecked(area_ix) {
        const new_area_arr = [...area_arr];
        new_area_arr[area_ix].checked = !new_area_arr[area_ix].checked;
        setAreaArr(new_area_arr);
        getData_API_Search(search_obj.value_search, 1);
    }

    //
    function handleFilterRate(new_rate_ix) {
        setActiveRateIx(new_rate_ix);
        getData_API_Search(search_obj.value_search, 1, new_rate_ix);
    }

    //
    function handleFilterSort(new_sort_by) {
        setCurSortBy(new_sort_by);
        getData_API_Search(
            search_obj.value_search,
            1,
            active_rate_ix,
            new_sort_by
        );
    }

    //
    function closeFilter() {
        setOpenFilter(false);
    }
    //
    function openFilter() {
        setOpenFilter(true);
    }

    //
    const { value_search, cur_page, pages } = search_obj;
    //
    return (
        <div>
            <FashionHSearch
                handleSearchFashion={handleSearchFashion}
                value_search={value_search}
                handleChangeValueSearch={handleChangeValueSearch}
            />

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
                        handleAreaChecked={handleAreaChecked}
                        //
                        active_rate_ix={active_rate_ix}
                        handleFilterRate={handleFilterRate}
                        //
                        cur_sort_by={cur_sort_by}
                        handleFilterSort={handleFilterSort}
                    />
                </div>

                <div className="FashionSearch_product">
                    <div>
                        <SearchProducts
                            products={products_obj[cur_page] || []}
                        />
                    </div>

                    <div className="FashionSearch_pagination">
                        <Pagination
                            count={pages}
                            num_side_center={2}
                            current={cur_page}
                            handleChangePage={handleChangePage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

FashionSearch.propTypes = {};

export default FashionSearch;
