import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { API_FashionProduct_R } from '../../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import { useMounted } from '../../../../../../_hooks/useMounted';
//
import { openScreenNotice } from '../../../../../../component/_screen_once/notice/ScreenNotice';
//
import { actionFashionChangeCountCartNum } from '../../../../../../redux/action/action_count_cart';
//
import {
    initial_fashion_info_right,
    initial_fashion_shop,
} from '../../../../../../_initial/fashion/FashionInitial';

import { handle_API_FashionCart_C } from '../../../../../../_handle_api/fashion/FashionCartHandleAPi';

import FashionItemInfo from '../info/_main/FashionItemInfo';
import FashionOwner from '../../owner/_main/FashionOwner';
import FashionCartSuccess from '../../add_cart_success/FashionCartSuccess';
import observeToDo from '../../../../../../_some_function/observerToDo';
import { changeOwnerInfo } from '../../../../../../_some_function/fashion/FashionFunction';

//
FashionItemShop.propTypes = {};

//
function FashionItemShop({ id }) {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    const dispatch = useDispatch();

    //
    const [item_shop_state, setItemShopState] = useState({
        vid_pic_arr: [''],
        info_right: initial_fashion_info_right(),
        shop_obj: initial_fashion_shop(),
        has_fetched: false,
        wait_add_cart: false,
    });

    const { vid_pic_arr, info_right, shop_obj, has_fetched, wait_add_cart } =
        item_shop_state;

    const { owner_info, ...rest_shop_obj } = shop_obj;

    //
    const ref_item_shop = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        setItemShopState({
            vid_pic_arr: [''],
            info_right: initial_fashion_info_right(),
            shop_obj: initial_fashion_shop(),
            has_fetched: false,
            wait_add_cart: false,
        });

        observeToDo({ elm: ref_item_shop.current, callback: getData_API_Item });
    }, [id]);

    /* ---------------- COMMON ---------------- */

    function handleData_Common(data) {
        document.title = data.name;

        has_fetched &&
            setItemShopState({
                vid_pic_arr: [''],
                info_right: initial_fashion_info_right(),
                shop_obj: initial_fashion_shop(),
                has_fetched: false,
                wait_add_cart: false,
            });

        const {
            vid_pics: new_vid_pic_arr,
            shop_obj: new_shop_obj,
            ...rest_data
        } = data;

        //  format information
        changeOwnerInfo(new_shop_obj.owner_info);

        setItemShopState({
            vid_pic_arr: new_vid_pic_arr.map((item) => item.vid_pic),
            info_right: rest_data,
            shop_obj: new_shop_obj,
            has_fetched: true,
            wait_add_cart: false,
        });
    }

    /* ---------------- GET API ---------------- */

    //
    async function getData_API_Item() {
        const res = await API_FashionProduct_R(id);
        mounted && handleData_Common(res.data);
    }

    /* -------------------------------- */

    //
    async function addToCart(new_add_cart) {
        setItemShopState({
            ...item_shop_state,
            wait_add_cart: true,
        });

        const { data } = await handle_API_FashionCart_C({
            product_model: id,
            quantity: new_add_cart,
        });

        dispatch(actionFashionChangeCountCartNum(1));

        setItemShopState({
            ...item_shop_state,
            info_right: {
                ...info_right,
                total_add_cart: info_right.total_add_cart + new_add_cart,
            },
            wait_add_cart: false,
        });

        openScreenNotice({
            openScreenOnce: openScreenOnce,
            ComponentNotice: <FashionCartSuccess />,
        });

        setTimeout(() => {
            closeScreenOnce();
        }, 500);
    }

    //
    return (
        <div ref={ref_item_shop}>
            <div className="margin-bottom-1rem">
                <FashionItemInfo
                    id={id}
                    vid_pic_arr={vid_pic_arr}
                    info_right={info_right}
                    has_fetched={has_fetched}
                    wait_add_cart={wait_add_cart}
                    addToCart={addToCart}
                />
            </div>

            <div>
                <FashionOwner
                    owner_profile={rest_shop_obj}
                    owner_info={owner_info}
                />
            </div>
        </div>
    );
}

export default FashionItemShop;
