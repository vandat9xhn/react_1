import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
//
import {
    API_FashionProduct_L,
    API_FashionShop_R,
} from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import FashionH from '../../../components/head/_main/FashionH';
import ShopHead from '../shop_head/_main/ShopHead';
import ShopBody from '../shop_body/_main/ShopBody';
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';

//
Shop.propTypes = {};

//
function Shop(props) {
    const { id } = useParams();
    //
    const [shop, setShop] = useState({});
    const [products_obj, setProductsObj] = useState({});
    const [page_obj, setPageObj] = useState({
        cur_page: 1,
        count_page: 1,
    });
    const [list_name, setListName] = useState([]);
    // 
    const is_location_changed = useRef(true)

    //
    useEffect(() => {
        getData_API_Shop();
        getData_API_ListName();
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
        setListName(res.data.list_name || []);
    }
    // products
    async function getData_API_Products(cur_page) {
        is_location_changed.current = false
        // 
        const res = await API_FashionProduct_L({
            page: cur_page,
            size: 15,
            shop_model: id,
        });
        //
        setPageObj({
            cur_page: cur_page,
            count_page: res.data.pages,
        });
        setProductsObj({
            ...products_obj,
            [cur_page]: res.data.data,
        });
        // 
        setTimeout(() => {
            is_location_changed.current = true
        }, 1);
    }

    /* ---------------------------------- */

    //
    function handleChangePage(new_page) {
        history.pushState('', '', `?page=${new_page}`);
        // 
        if (products_obj[new_page] == undefined) {
            getData_API_Products(new_page);
        } else {
            is_location_changed.current = false
            // 
            setPageObj({
                ...page_obj,
                cur_page: new_page,
            });
            // 
            setTimeout(() => {
                is_location_changed.current = true
            }, 1);
        }
    }

    //
    return (
        <div>
            <div className="FashionItem_head">
                <FashionH />
            </div>

            <div>
                <ShopHead shop_head_obj={shop} />
            </div>

            <div>
                <ShopBody
                    products={
                        products_obj[page_obj.cur_page]
                            ? products_obj[page_obj.cur_page]
                            : []
                    }
                    list_name={list_name}
                    count_page={page_obj.count_page}
                    cur_page={page_obj.cur_page}
                    handleChangePage={handleChangePage}
                />
            </div>
        </div>
    );
}

export default Shop;
