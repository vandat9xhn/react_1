import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import ShopCartBuy from '../../../../../components/shop_cart_buy/ShopCartBuy';

import BuyingItem from '../buying_item/BuyingItem';
import InfoBuying from '../../../../../components/info_buying/InfoBuying';

//
import './BuyingShop.scss';

//
BuyingShop.propTypes = {
    buy_shop: PropTypes.object,
    buy_shop_ix: PropTypes.number,
    openConFirmCancelBuying: PropTypes.func,
};

//
function BuyingShop({
    buy_shop,
    buy_shop_ix,

    openConFirmCancelBuying,
}) {
    //
    const {
        shop,
        products,
        status,

        payment,
        transport_price_model,
        voucher_model,
    } = buy_shop;

    const { id, name, picture } = shop;

    //
    const amount = products.reduce(
        (a, buy_product) =>
            a + buy_product.product.new_price * buy_product.quantity,
        0
    );

    //
    return (
        <div className="BuyingShop bg-primary">
            <div className="BuyingShop_head">
                <div className="BuyingShop_shop">
                    <ShopCartBuy id={id} name={name} picture={picture} />
                </div>
            </div>

            <div>
                <div className="BuyingShop_items_contain">
                    {products.map((buy_product, ix) => (
                        <div
                            key={`BillBuying_item_${ix}`}
                            className="BuyingShop_item"
                        >
                            <BuyingItem
                                buy_product={buy_product}
                                status={status}
                                //
                                buy_shop_ix={buy_shop_ix}
                                buy_product_ix={ix}
                                //
                                openConFirmCancelBuying={
                                    openConFirmCancelBuying
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="BuyingShop_bot width-fit-content margin-auto padding-8px">
                <div className="font-500">
                    Total: {formatNum(amount)} VND
                </div>

                <div className="BuyingShop_bot-info box-shadow-1 brs-5px">
                    <InfoBuying
                        amount={amount - transport_price_model - voucher_model}
                        voucher_price={voucher_model}
                        transport_price={transport_price_model}
                        payment={payment}
                    />
                </div>
            </div>
        </div>
    );
}

export default BuyingShop;
