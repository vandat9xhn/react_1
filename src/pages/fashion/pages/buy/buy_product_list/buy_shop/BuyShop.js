import React from 'react';
import PropTypes from 'prop-types';
//
import ProductCartBuy from '../../../../components/product_cart_buy/ProductCartBuy';
import ShopCartBuy from '../../../../components/shop_cart_buy/ShopCartBuy';
//
import './BuyShop.scss';

//
BuyShop.propTypes = {
    checked_products: PropTypes.array,
    shop: PropTypes.object,
};

BuyShop.defaultProps = {
    checked_products: [],
    shop: {},
}

//
function BuyShop(props) {
    const {checked_products, shop} = props;
    //
    const { id, name, picture } = shop
    //
    const voucher_shop = 1000
    const total_price = checked_products.reduce((a, b) => a + b.product.new_price * b.quantity, 0)

    // 
    return (
        <div>
            <div className="BuyShop_shop">
                <div className="BuyShop_shop-contain">
                    <ShopCartBuy
                        id={id}
                        name={name}
                        picture={picture}
                    />
                </div>
            </div>

            <div>
                {checked_products.map((checked_product, ix) => (
                    <ProductCartBuy
                        key={`BuyShop_list${ix}`}
                        product={checked_product.product}
                        quantity={checked_product.quantity}
                    >
                        <div className="text-align-center">
                            x{checked_product.quantity}
                        </div>
                    </ProductCartBuy>
                ))}
            </div>
            
            <div className="BuyShop_calculate">
                <div>
                    Voucher: {voucher_shop}
                </div>

                <div>
                    <span className="label-field">Total:</span>
                    <span className="label-field">{total_price - voucher_shop}</span>
                </div>
            </div><hr className="App_hr-bg"/>
        </div>
    );
}

export default BuyShop;
