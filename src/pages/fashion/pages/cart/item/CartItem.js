import React from 'react';
import PropTypes from 'prop-types';
//
import { useWaitingLastAction } from '../../../../../_hooks/useWaitingLastAction';
import { useNewCount } from '../../../../../_hooks/useCount';
//
import ProductCartBuy from '../../../components/product_cart_buy/ProductCartBuy';
//
import './CartItem.scss';

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
function CartItem({
    cart_ix,
    cart_product,
    cart_product_ix,
    handleCheckItem,
    handleSetCount,
}) {
    //
    const { product, quantity, checked } = cart_product;

    const {
        count,
        countUp,
        countDown,
        beforeCountNum,
        countNum,
        countNumDone,
    } = useNewCount({
        getCount,
        getMax,
        getMin,
        handleSetCount: (new_count) =>
            handleSetCount(cart_ix, cart_product_ix, new_count),
    });

    //
    function getCount() {
        return quantity;
    }

    //
    function getMax() {
        return product.total;
    }

    //
    function getMin() {
        return getMax() > 0 ? 1 : 0;
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
        <div className="CartItem padding-8px">
            <div className="CartItem_row-product display-flex align-items-center brs-5px">
                <div className="CartItem_check">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onCheckItem}
                    />
                </div>

                <div className="CartItem_products">
                    <ProductCartBuy product={product} quantity={+count}>
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
    );
}

export default CartItem;
