import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useNewCount } from '../../../../../_custom_hooks/useCount';
//
import './CartItem.scss';
import ProductCartBuy from '../../../components/product_cart_buy/ProductCartBuy';

//
CartItem.propTypes = {
    cart_product: PropTypes.shape({
        checked: PropTypes.bool,
        quantity: PropTypes.number,
        product: PropTypes.object,
    }),
};

CartItem.defaultProps = {
    cart_product: {
        checked: false,
        quantity: 0,
        product: {},
    },
};

//
function CartItem(props) {
    const {
        cart_ix,
        cart_product,
        cart_product_ix,
        handleCheckItem,
        handleCount,
    } = props;

    const { product, quantity, checked } = cart_product;
    //
    const should_update = useRef(false);
    //
    const [
        count,
        countUp,
        countDown,
        // 
        beforeCountNum,
        countNum,
        countNumDone,
        // 
        changeMax,
    ] = useNewCount(1, 1, 1, onCount);
    //
    useEffect(() => {
        changeMax(product.total);
        countNumDone(quantity);
        setTimeout(() => {
            should_update.current = true;
        }, 1);
    }, []);
    //
    function onCount(value) {
        should_update.current && handleCount(cart_ix, cart_product_ix, value);
    }
    //
    function onBeforeCountNum(e) {
        beforeCountNum(e.target.value);
    }
    //
    function onCountNum(e) {
        countNum(e.target.value);
    }
    //
    function onCountNumDone(e) {
        countNumDone(e.target.value);
    }
    //
    function onCheckItem() {
        handleCheckItem(cart_ix, cart_product_ix);
    }

    //
    return (
        <div className="CartItem">
            <div className="CartItem_contain">
                <div className="CartItem_row-product display-flex align-items-center brs-5px">
                    <div className="CartItem_check">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={onCheckItem}
                        />
                    </div>

                    <div className="CartItem_products">
                        <ProductCartBuy product={product} quantity={count}>
                            <div className="CartItem_count display-flex align-items-center">
                                <div onClick={countDown}>-</div>

                                <div className="CartItem__input">
                                    <input
                                        className="inner-spin-none"
                                        type="number"
                                        value={count}
                                        onFocus={onBeforeCountNum}
                                        onChange={onCountNum}
                                        onBlur={onCountNumDone}
                                    />
                                </div>

                                <div onClick={countUp}>+</div>
                            </div>
                        </ProductCartBuy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
