import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ProductCartBuy from '../../../../../components/product_cart_buy/ProductCartBuy';
//
import './BuyingItem.scss';

//
BuyingItem.propTypes = {
    buy_product: PropTypes.object,
    buy_shop_ix: PropTypes.number,
    buy_product_ix: PropTypes.number,
    openConFirmCancelBuying: PropTypes.func,
};

//
function BuyingItem(props) {
    const {
        buy_product,
        status,
        buy_shop_ix,
        buy_product_ix,
        openConFirmCancelBuying,
    } = props;

    const { product, quantity } = buy_product;
    //
    function onOpenConFirmCancelBuying() {
        openConFirmCancelBuying(buy_shop_ix, buy_product_ix, product.id);
    }

    //
    return (
        <div className="BuyingItem position-rel">
            <ProductCartBuy product={product} quantity={quantity}>
                <div className="text-align-center">x{quantity}</div>
            </ProductCartBuy>

            {status == 'BUYING' && (
                <div
                    className="BuyingItem_cancel close-icon-small brs-50 cursor-pointer hv-opacity"
                    onClick={onOpenConFirmCancelBuying}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            )}
        </div>
    );
}

export default BuyingItem;
