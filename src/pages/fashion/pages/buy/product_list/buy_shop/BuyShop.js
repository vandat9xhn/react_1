import React from 'react';
import PropTypes from 'prop-types';
//
import ProductCartBuy from '../../../../components/product_cart_buy/ProductCartBuy';
import ShopCartBuy from '../../../../components/shop_cart_buy/ShopCartBuy';
//
import './BuyShop.scss';
import { formatNum } from '../../../../../../_some_function/FormatNum';

//
BuyShop.propTypes = {
    checked_products: PropTypes.array,
    shop: PropTypes.object,
};

BuyShop.defaultProps = {
    checked_products: [],
    shop: {},
};

//
function BuyShop({ checked_products, shop }) {
    //
    const { id, name, picture } = shop;

    //
    const voucher_shop = 1000;
    const total_price = checked_products.reduce(
        (a, b) => a + b.product.new_price * b.quantity,
        0
    );

    //
    return (
        <div className="BuyShop bg-primary">
            <div className="BuyShop_head">
                <div className="display-flex space-between flex-wrap">
                    <div>
                        <ShopCartBuy id={id} name={name} picture={picture} />
                    </div>

                    <div className="BuyShop_calculate">
                        <div>Voucher: {voucher_shop}</div>

                        <div>
                            <span className="label-field">Total: </span>

                            <span className="label-field">
                                {formatNum(total_price - voucher_shop)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {checked_products.map((checked_product, ix) => (
                    <div key={`BuyShop_list${ix}`} className="BuyShop_item">
                        <ProductCartBuy
                            product={checked_product.product}
                            quantity={checked_product.quantity}
                        >
                            <div className="BuyShop_item_count text-align-center">
                                x{checked_product.quantity}
                            </div>
                        </ProductCartBuy>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuyShop;
