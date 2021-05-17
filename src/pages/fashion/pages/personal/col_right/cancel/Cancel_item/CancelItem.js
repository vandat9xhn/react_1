import React from 'react';
import PropTypes from 'prop-types';
// 
import ProductCartBuy from '../../../../../components/product_cart_buy/ProductCartBuy';
// 
import './CancelItem.scss';

//
CancelItem.propTypes = {
    cancel_product: PropTypes.object,
};


//
function CancelItem(props) {
    const {cancel_product} = props;

    const {product, quantity} = cancel_product
    
    //
    return (
        <div className="CancelItem">
            <div className="CancelItem_contain box-shadow-1 brs-5px">
                <div className="CancelItem_row">
                    <ProductCartBuy
                        product={product}
                        quantity={quantity}
                    >
                        <div className="text-align-center">
                            x{quantity}
                        </div>
                    </ProductCartBuy>
                </div>
            </div>
        </div>
    );
}

export default CancelItem;