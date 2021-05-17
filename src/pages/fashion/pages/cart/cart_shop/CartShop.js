import React from 'react';
import PropTypes from 'prop-types';
// 
import CartItem from '../change/CartItem';
import ShopCartBuy from '../../../components/shop_cart_buy/ShopCartBuy';

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
function CartShop(props) {
    const {cart_ix, products, shop, handleCheckItem, handleCount} = props;

    // 
    return (
        <div>
            <ShopCartBuy
                id={shop.id}
                name={shop.name}
                picture={shop.picture}
            />

            <div>
                {products.map(
                    (cart_product, ix) =>
                        !cart_product.is_del && (
                            <CartItem
                                key={`FashionCart_product_${ix}`}
                                cart_ix={cart_ix}
                                cart_product={cart_product}
                                cart_product_ix={ix}
                                handleCheckItem={handleCheckItem}
                                handleCount={handleCount}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default CartShop;
