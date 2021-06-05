import React from 'react';
import PropTypes from 'prop-types';
//
import ShopCartBuy from '../../../components/shop_cart_buy/ShopCartBuy';
//
import './CartShop.scss';
//
import CartItem from '../item/CartItem';

//
CartShop.propTypes = {
    cart_ix: PropTypes.number,
    products: PropTypes.array,
    shop: PropTypes.object,
    //
    handleCheckItem: PropTypes.func,
    handleCount: PropTypes.func,
};

//
function CartShop({ cart_ix, products, shop, handleCheckItem, handleCount }) {
    //
    return (
        <div className="bg-primary box-shadow-1">
            <ShopCartBuy id={shop.id} name={shop.name} picture={shop.picture} />

            <div>
                {products.map(
                    (cart_product, ix) =>
                        !cart_product.is_del && (
                            <div
                                key={`FashionCart_product_${ix}`}
                                className="FashionCart_item"
                            >
                                <CartItem
                                    cart_ix={cart_ix}
                                    cart_product={cart_product}
                                    cart_product_ix={ix}
                                    handleCheckItem={handleCheckItem}
                                    handleCount={handleCount}
                                />
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

export default CartShop;
