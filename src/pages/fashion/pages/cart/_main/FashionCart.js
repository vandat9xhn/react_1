import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import {
    API_FashionCart_LC,
    API_FashionCart_UD,
} from '../../../../../api/api_django/fashion/APIFashionToken';
//
import { useMounted } from '../../../../../_custom_hooks/useMounted';
import { useScreenFetching } from '../../../../../_custom_hooks/UseScreenFetching';
//
import makeFormData from '../../../../../_some_function/makeFormData';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
import NoItemHasFetched from '../../../../../component/some_div/no_item/NoItemHasFetched';
//
import { params_cart } from '../../../__params/home/FashionParams';

import { actionFashionChangeCountCart } from '../../../../../redux/action/action_count_cart';

import FashionH from '../../../components/head/_main/FashionH';
//
import './FashionCart.scss';
//
import CartHead from '../cart_head/CartHead';
import CartShop from '../cart_shop/CartShop';
// 
import './FashionCartRes.scss';

//
function FashionCart(props) {
    //
    const { openScreenConfirm } = useContext(context_api);

    //
    const { count_cart } = useSelector((state) => state.count_cart_obj);
    const dispatch = useDispatch();

    //
    const [cart_state, setCartState] = useState({
        carts: [],
        count_checked: 0,
        has_fetched: false,
    });

    const { carts, count_checked, has_fetched } = cart_state;

    // 
    ;

    //
    const mounted = useMounted();
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        document.title = 'Cart';
        getAPI_ActionCart();
    }, []);

    /* --------------------- GET API ----------------------- */

    //
    async function getAPI_ActionCart() {
        try {
            const res = await API_FashionCart_LC('GET', params_cart);

            setCartState({
                carts: res.data,
                count_checked: res.data.reduce(
                    (a, b) => a + b.count_checked_product,
                    0
                ),
                has_fetched: true,
            });
        } catch (e) {
            console.log(e);
        }
    }

    /* --------------------- CHECK --------------------- */

    //
    async function handleCheckItem(cart_ix, cart_product_ix) {
        const cart_product = carts[cart_ix].products[cart_product_ix];
        const cur_checked = cart_product.checked;
        cart_product.checked = !cur_checked;

        setCartState({
            ...cart_state,
            count_checked: count_checked + (cur_checked ? -1 : 1),
        });

        const formData = makeFormData({
            cart_product_model: cart_product.id,
            checked: !cur_checked * 1,
        });
        await API_FashionCart_UD('PUT', formData);
    }

    //
    async function onCheckAll() {
        const all_checked = count_checked == count_cart;

        carts.map((item) => {
            item.products.map((product) => {
                product.checked = all_checked ? false : true;
                return product;
            });
            return item;
        });

        setCartState({
            ...cart_state,
            count_checked: all_checked ? 0 : count_cart,
        });

        const formData = makeFormData({
            is_checked_all: 1,
            checked: !all_checked * 1,
        });
        await API_FashionCart_UD('PUT', formData);
    }

    /* --------------------- COUNT --------------------- */

    // count
    function handleCount(cart_ix, product_ix, value) {
        const cart_product = carts[cart_ix].products[product_ix];
        cart_product.quantity = value;
        //
        doAPI_handleCount(cart_product.id, value);
    }

    //
    async function doAPI_handleCount(cart_product_id, quantity) {
        const formData = makeFormData({
            cart_product_model: cart_product_id,
            quantity: quantity,
        });
        await API_FashionCart_UD('PUT', formData);
    }

    /* --------------------- DEL --------------------- */

    //
    function openConfirmDel() {
        openScreenConfirm(
            'Delete',
            'Do you want to remove this product from cart?',
            handleDeleteCart
        );
    }

    //
    async function handleDeleteCart() {
        await handleScreenFetching(() => API_FashionCart_UD('DELETE'));

        let count_del = 0;
        //
        for (const cart_action of carts) {
            const { products } = cart_action;

            for (let i in products) {
                if (products[i].checked) {
                    products[i] = { is_del: true };
                    cart_action.count_product -= 1;
                    count_del++;
                }
            }
        }

        dispatch(actionFashionChangeCountCart(count_cart - count_del));

        mounted &&
            setCartState({
                ...cart_state,
                count_checked: 0,
            });
    }

    //
    const is_empty_cart = carts.reduce((a, b) => a + b.count_product, 0) == 0;

    //
    return (
        <div className="FashionCart">
            <div>
                <FashionH />
            </div>

            <h2 className="text-secondary App_title">Cart</h2>

            <div
                className={`FashionCart_body ${
                    is_empty_cart ? 'display-none' : ''
                }`}
            >
                <CartHead
                    count_checked={count_checked}
                    count_cart={count_cart}
                    openConfirmDel={openConfirmDel}
                    onCheckAll={onCheckAll}
                />

                <div>
                    {carts.map((cart, cart_ix) => (
                        <div
                            key={`FashionCart_${cart_ix}`}
                            className={`FashionCart_action ${
                                cart.count_product ? '' : 'display-none'
                            }`}
                        >
                            <CartShop
                                cart_ix={cart_ix}
                                products={cart.products}
                                shop={cart.shop}
                                handleCheckItem={handleCheckItem}
                                handleCount={handleCount}
                            />
                        </div>
                    ))}
                </div>

                <div className="FashionCart_buy">
                    <div
                        className={`${
                            count_checked ? '' : 'pointer-events-none opacity-05'
                        }`}
                    >
                        <Link to="/fashion/buy">
                            <button className="FashionCart_buy-now btn btn-hv btn-active brs-5px">
                                Buy now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <NoItemHasFetched
                has_fetched={has_fetched}
                no_item={is_empty_cart}
                title={
                    <div className="FashionCart_item-title FashionCart_no-product brs-5px box-shadow-1">
                        LET'S GO SHOPPING
                    </div>
                }
            />

            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={!has_fetched} />
            </div>
        </div>
    );
}

export default FashionCart;
