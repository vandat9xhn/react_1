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
function BuyingItem({
    buy_product,
    status,
    buy_shop_ix,
    buy_product_ix,
    openConFirmCancelBuying,
}) {
    //
    const { product, quantity } = buy_product;

    //
    function onOpenConFirmCancelBuying() {
        openConFirmCancelBuying(buy_shop_ix, buy_product_ix, product.id);
    }

    //
    return (
        <div className="BuyingItem pos-rel padding-8px">
            <ProductCartBuy product={product} quantity={quantity}>
                <div className="BuyingItem_quantity text-align-center">
                    x{quantity}
                </div>
            </ProductCartBuy>

            {status == 'BUYING' && location.search == '?stage=buying' && (
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
