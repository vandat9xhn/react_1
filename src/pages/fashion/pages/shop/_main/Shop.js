import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    API_FashionProduct_L,
    API_FashionShop_R,
} from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';

import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import FashionH from '../../../components/head/_main/FashionH';
import ShopHead from '../shop_head/_main/ShopHead';
import ShopBody from '../shop_body/_main/ShopBody';
import observeToDo from '../../../../../_some_function/observerToDo';

//
Shop.propTypes = {};

//
function Shop(props) {
    //
    const { id } = GetIdSlug();

    //
    const [shop, setShop] = useState({});
    const [products_obj, setProductsObj] = useState({});
    const [page_obj, setPageObj] = useState({
        cur_page: 1,
        count_page: 1,
    });
    const [list_name, setListName] = useState([]);
    const [active_group_ix, setActiveGroupIx] = useState(-1);
    const [is_fetching, setIsFetching] = useState(true);

    const {cur_page, count_page} = page_obj;

    //
    const is_location_changed = useRef(false);
    const ref_head = useRef(null);
    const ref_body = useRef(null);

    //
    useEffect(() => {
        const cur_page = parseInt(ParseLocationSearch()['page']) || 1;

        observeToDo(ref_head.current, getData_API_Shop, 0);
        observeToDo(ref_body.current, getData_API_ListName, 0);
        observeToDo(ref_body.current, () => getData_API_Products(cur_page), 0);
    }, []);
    //
    useEffect(() => {
        if (is_location_changed.current) {
            const cur_page = parseInt(ParseLocationSearch()['page']) || 1;
            getData_API_Products(cur_page);
        }
    }, [location.search]);

    /* -------------------- GET API ----------------------- */

    // shop
    async function getData_API_Shop() {
        const res = await API_FashionShop_R(id);
        setShop(res.data);
    }

    // list name
    async function getData_API_ListName() {
        const res = await API_FashionShop_R(id);
        setListName(res.data.list_names);
    }

    // products
    async function getData_API_Products(cur_page) {
        is_location_changed.current = false;
        setIsFetching(true);
        //
        const res = await API_FashionProduct_L({
            page: cur_page,
            size: 15,
            shop_model: id,
        });
        const {data, pages} = res.data

        //
        setPageObj({
            cur_page: cur_page,
            count_page: pages,
        });
        setProductsObj(products_obj => ({
            ...products_obj,
            [cur_page]: data,
        }));
        setIsFetching(false);
        //
        setTimeout(() => {
            is_location_changed.current = true;
        }, 1);
    }

    /* ----------------- PAGE ----------------- */

    //
    function handleChangePage(new_page) {
        history.pushState('', '', `?page=${new_page}`);
        //
        if (products_obj[new_page] == undefined) {
            getData_API_Products(new_page);
        } else {
            is_location_changed.current = false;
            //
            setPageObj({
                ...page_obj,
                cur_page: new_page,
            });
            //
            setTimeout(() => {
                is_location_changed.current = true;
            }, 1);
        }
    }

    /* ----------------- GROUP ----------------- */

    // 
    function changeGroupProducts(ix){
        if (ix != active_group_ix) {
            history.pushState('', '', `?page=${1}`);

            setProductsObj({})
            setActiveGroupIx(ix)
            getData_API_Products(1)
        }
    }

    //
    return (
        <div>
            <div className="FashionItem_head">
                <FashionH />
            </div>

            <div ref={ref_head}>
                <ShopHead shop_head_obj={shop} />
            </div>

            <div ref={ref_body}>
                <ShopBody
                    products={
                        products_obj[cur_page] ? products_obj[cur_page] : []
                    }
                    list_name={list_name}
                    active_group_ix={active_group_ix}
                    // 
                    count_page={count_page}
                    cur_page={cur_page}
                    is_fetching={is_fetching}
                    // 
                    changeGroupProducts={changeGroupProducts}
                    handleChangePage={handleChangePage}
                />
            </div>
        </div>
    );
}

export default Shop;
