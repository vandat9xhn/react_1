import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { initial_fashion_item_base_obj } from '../../../../../../_initial/fashion/FashionInitial';
//
import { GetIdSlug } from '../../../../../../_some_function/GetIdSlug';
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { handle_API_FsProduct_L } from '../../../../../../_handle_api/fashion/FashionHandleAPI';
//
import FsShopProductsPc from '../pc/_main/FsShopProductsPc';
import FsShopProductsMb from '../_mobile/_main/FsShopProductsMb';
//
import './FsShopProducts.scss';

//
const SIZE = 30;

const SORT_ARR = ['Phổ biến', 'Mới nhất', 'Bán chạy'];
const SORT_KEY_ARR = ['common', '-date', '-sold'];

const SORT_PRICE_ARR = ['Thấp đến cao', 'Cao đến thấp'];
const SORT_PRICE_KEY_ARR = ['new_price', '-new_price'];

//
FsShopProducts.propTypes = {};

//
function FsShopProducts({ category_arr }) {
    //
    const [state_obj, setStateObj] = useState({
        product_arr: [] || [initial_fashion_item_base_obj()],

        category_id: -1,
        sort_ix: 0,
        sort_price_ix: -1,

        page: 1,
        pages: 1,

        is_fetching: true,
    });

    const {
        product_arr,

        category_id,
        sort_ix,
        sort_price_ix,

        page,
        pages,

        is_fetching,
    } = state_obj;

    //
    const ref_main_elm = useRef();

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_API_Products({});
            },
        });
    }, []);

    // ------- API

    //
    async function getData_API_Products({
        new_page = 1,
        start_obj_state = {},
        params = {},
    }) {
        setStateObj({
            ...state_obj,
            page: new_page,
            is_fetching: true,
            ...start_obj_state,
        });

        const { data, pages } = await handle_API_FsProduct_L(0, 'shop_product', {
            shop_product: GetIdSlug(),
            page: new_page,
            size: SIZE,
            ...params,
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: false,
                product_arr: data,
                pages: pages,
            };
        });
    }

    // -------

    function handleChangePage(new_page) {
        getData_API_Products({
            new_page: new_page,
            params: {},
        });
    }

    // ------- CATEGORY

    //
    function handleChangeCategory(new_category_id = -1) {
        getData_API_Products({
            new_page: 1,
            params: {
                category_model: new_category_id,
            },
            start_obj_state: {
                category_id: new_category_id,
            },
        });
    }

    // ------- SORT

    //
    function handleSort(new_sort_ix) {
        getData_API_Products({
            new_page: 1,
            start_obj_state: {
                sort_ix: new_sort_ix,
                sort_price_ix: -1,
            },
            params: {
                sort: SORT_KEY_ARR[new_sort_ix],
            },
        });
    }

    //
    function handleSortPrice(new_sort_price_ix = 0) {
        getData_API_Products({
            new_page: 1,
            start_obj_state: {
                sort_ix: -1,
                sort_price_ix: new_sort_price_ix,
            },
            params: {
                sort: SORT_PRICE_KEY_ARR[new_sort_price_ix],
            },
        });
    }

    //
    function handleSortPriceMb() {
        handleSortPrice(sort_price_ix == 0 ? 1 : 0);
    }

    // ------ NEXT PREV

    //
    function handleNext() {
        page < pages && handleChangePage(page + 1);
    }

    //
    function handlePrev() {
        page >= 2 && handleChangePage(page - 1);
    }

    //
    return (
        <div ref={ref_main_elm} className="FsShopProducts user-select-none">
            {IS_MOBILE ? (
                <FsShopProductsMb
                    product_arr={product_arr}
                    sort_arr={SORT_ARR}
                    sort_ix={sort_ix}
                    sort_price_ix={sort_price_ix}
                    handleSort={handleSort}
                    handleSortPrice={handleSortPriceMb}
                />
            ) : (
                <FsShopProductsPc
                    category_arr={category_arr}
                    category_id={category_id}
                    sort_arr={SORT_ARR}
                    sort_ix={sort_ix}
                    sort_price_arr={SORT_PRICE_ARR}
                    sort_price_ix={sort_price_ix}
                    //
                    product_arr={product_arr}
                    is_fetching={is_fetching}
                    page={page}
                    pages={pages}
                    //
                    handleChangeCategory={handleChangeCategory}
                    handleSort={handleSort}
                    handleSortPrice={handleSortPrice}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    handleChangePage={handleChangePage}
                />
            )}
        </div>
    );
}

export default FsShopProducts;
