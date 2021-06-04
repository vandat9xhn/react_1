import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//
import { useMounted } from '../../../../../_custom_hooks/useMounted';
import {
    API_FashionCart_LC,
    API_FashionCart_UD,
} from '../../../../../api/api_django/fashion/APIFashionToken';

import makeFormData from '../../../../../_some_function/makeFormData';
// 
import ConfirmDiv from '../../../../../component/some_div/confirm_div/ConfirmDiv';
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
// 
import { params_cart } from '../../../__params/home/FashionParams';

import { actionFashionChangeCountCart } from '../../../../../redux/action/action_count_cart';

import FashionH from '../../../components/head/_main/FashionH';
import CartHead from '../cart_head/CartHead';
import CartShop from '../cart_shop/CartShop';
//
import './FashionCart.scss';
import './FashionCartRes.scss';

//
function FashionCart(props) {
    //
    const { count_cart } = useSelector((state) => state.count_cart_obj);
    const dispatch = useDispatch();
    // state
    const [carts, setCarts] = useState([]);
    const [count_checked, setCountChecked] = useState(0);
    const [open_confirm_del, setOpenConfirmDel] = useState(false);
    const [has_fetched, setHasFetched] = useState(false);
    const [is_deleting, setIsDeleting] = useState(false);
    // use hook
    const mounted = useMounted();

    // effect
    useEffect(() => {
        document.title = 'Cart';
        getAPI_ActionCart();
    }, []);

    /* --------------------- GET API ----------------------- */

    //
    async function getAPI_ActionCart() {
        try {
            const res = await API_FashionCart_LC('GET', params_cart);
            // setCarts(res.data)
            carts.push(...res.data);
            setCountChecked(
                res.data.reduce((a, b) => a + b.count_checked_product, 0)
            );
        } catch (e) {
            console.log(e);
        } finally {
            setHasFetched(true);
        }
    }

    /* --------------------- CHECK --------------------- */

    //
    async function handleCheckItem(cart_ix, cart_product_ix) {
        if (!mounted) {
            return;
        }
        //
        const cart_product = carts[cart_ix].products[cart_product_ix];
        const cur_checked = cart_product.checked;

        cart_product.checked = !cur_checked;
        setCountChecked(count_checked + (cur_checked ? -1 : 1));
        //
        const formData = makeFormData({
            cart_product_model: cart_product.id,
            checked: !cur_checked * 1,
        });
        await API_FashionCart_UD('PUT', formData);
    }
    //
    async function onCheckAll() {
        if (!mounted) {
            return;
        }
        const all_checked = count_checked == count_cart;
        //
        carts.map((item) => {
            item.products.map((product) => {
                product.checked = all_checked ? false : true;
                return product;
            });
            return item;
        });
        setCountChecked(all_checked ? 0 : count_cart);
        //
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

    // del
    function openConfirmDel() {
        count_checked && setOpenConfirmDel(true);
    }
    //
    function closeConfirmDel() {
        setOpenConfirmDel(false);
    }
    //
    async function onDeleteCart() {
        setOpenConfirmDel(false);
        setIsDeleting(true);
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
        await API_FashionCart_UD('DELETE');
        dispatch(actionFashionChangeCountCart(count_cart - count_del));
        setCountChecked(0);
        setIsDeleting(false);
    }

    //
    const is_empty_cart = carts.reduce((a, b) => a + b.count_product, 0) == 0;

    //
    return (
        <div className="FashionCart">
            <div>
                <FashionH />
            </div>

            <div className="App_title">Cart</div>

            {!is_empty_cart && (
                <div className="FashionCart_body">
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

                    <div className="FashionCart_buy display-flex">
                        {count_checked ? (
                            <Link to="/fashion/buy">
                                <div className="FashionCart_buy-now FashionCart_buy_ready brs-5px box-shadow-1">
                                    Buy now
                                </div>
                            </Link>
                        ) : (
                            <div className="FashionCart_buy-now brs-5px opacity-5">
                                Buy now
                            </div>
                        )}
                    </div>
                </div>
            )}

            {is_empty_cart && has_fetched && (
                <div className="FashionCart_item-title FashionCart_no-product brs-5px box-shadow-1">
                    <div>LET'S GO SHOPPING</div>
                </div>
            )}

            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={!has_fetched} />
            </div>

            <ConfirmDiv
                open_confirm={open_confirm_del}
                closeConfirm={closeConfirmDel}
                confirmYes={onDeleteCart}
            >
                Do you want to delete this products?
            </ConfirmDiv>

            <div className={is_deleting ? 'screen-blur' : ''}>
                <div className="pos-abs-center">
                    <CircleLoading is_fetching={is_deleting} />
                </div>
            </div>
        </div>
    );
}

export default FashionCart;
