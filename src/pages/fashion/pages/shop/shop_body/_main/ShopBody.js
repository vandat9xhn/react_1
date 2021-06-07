import React, { useEffect, useRef, useState } from 'react';
import { stringify } from 'query-string';
import PropTypes from 'prop-types';
//
import {
    API_FashionProduct_L,
    API_FashionShop_R,
} from '../../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
import { ParseLocationSearch } from '../../../../../../_some_function/ParseLocationSearch';
//
import Pagination from '../../../../../../component/pagination/_main/Pagination';
import CircleLoading from '../../../../../../component/waiting/circle_loading/CircleLoading';
//
import ShopCategory from '../category/ShopCategory';
import ShopProducts from '../products/ShopProducts';
//
import './ShopBody.scss';

//
ShopBody.propTypes = {};

//
function ShopBody({ id }) {
    //
    const [shop_body_state, setShopBodyState] = useState({
        products_obj: { 1: [] },
        page: 1,
        pages: 1,
        list_name: [],
        active_group_ix: -1,
        is_fetching: false,
        has_fetched: false,
    });

    const {
        list_name,
        products_obj,
        page,
        pages,

        is_fetching,
        has_fetched,
    } = shop_body_state;

    const products = products_obj[page];

    //
    const mounted = useRef(true)

    const is_location_changed = useRef(true);
    const ref_body = useRef(null);
    const ref_category = useRef(null);

    //
    useEffect(() => {
        return () => {
            mounted.current = false
        }
    }, []);

    //
    useEffect(() => {
        observeToDo(ref_body.current, getData_API_ListName, 0);
    }, []);

    //
    useEffect(() => {
        if (is_location_changed.current) {
            observeToDo(ref_body.current, getData_API_Products_Refresh, 0);
        }
    }, [location.search]);

    /* -------------- GET API --------------- */

    //
    async function getData_API_ListName() {
        const res = await API_FashionShop_R(id);
        
        if (!mounted.current) {
            return;
        }

        setShopBodyState((shop_body_state) => ({
            ...shop_body_state,
            list_name: res.data.list_name,
        }));
    }

    //
    async function getData_API_Products({ new_page = 1, ...start_obj_state }) {
        is_location_changed.current = false;
        setShopBodyState({
            ...shop_body_state,
            is_fetching: true,
            ...start_obj_state,
        });

        const res = await API_FashionProduct_L({
            page: new_page,
            size: 15,
            shop_model: id,
        });
        const { data, pages: new_pages } = res.data;

        if (!mounted.current) {
            return;
        }

        setShopBodyState((shop_body_state) => ({
            ...shop_body_state,
            page: new_page,
            pages: shop_body_state.has_fetched ? pages : new_pages,
            products_obj: {
                ...shop_body_state.products_obj,
                [new_page]: data,
            },
            is_fetching: false,
            has_fetched: true,
        }));

        setTimeout(() => {
            is_location_changed.current = true;
        }, 1);
    }

    //
    function getData_API_Products_Refresh() {
        const cur_page = parseInt(ParseLocationSearch()['page']) || 1;

        getData_API_Products({
            new_page: has_fetched ? 1 : cur_page,
            page: 1,
            has_fetched: false,
            products_obj: { 1: [] },
        });
    }

    /* ----------------- PAGE ----------------- */

    //
    function handleChangePage(new_page) {
        history.pushState(
            '',
            '',
            '?' +
                stringify({
                    ...ParseLocationSearch(),
                    page: new_page,
                })
        );

        ref_category.current.scrollIntoView()

        if (
            products_obj[new_page] == undefined ||
            (new_page == 1 && products_obj[1].length == 0)
        ) {
            getData_API_Products({ new_page: new_page });
        } else {
            is_location_changed.current = false;

            if (!mounted) {
                return;
            }

            setShopBodyState({
                ...shop_body_state,
                page: new_page,
            });

            setTimeout(() => {
                is_location_changed.current = true;
            }, 1);
        }
    }

    //
    return (
        <div ref={ref_body}>
            <div ref={ref_category}>
                <ShopCategory list_name={list_name} />
            </div>

            <div className={is_fetching ? 'display-none' : ''}>
                <ShopProducts products={products} />
            </div>

            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={is_fetching} />
            </div>

            <div
                className={`ShopBody_pagination ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <Pagination
                    count={pages}
                    num_side_center={2}
                    current={page}
                    is_fetching={is_fetching}
                    handleChangePage={handleChangePage}
                />
            </div>
        </div>
    );
}

export default ShopBody;
