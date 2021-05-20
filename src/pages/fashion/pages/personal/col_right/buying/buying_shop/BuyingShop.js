import React from 'react';
import PropTypes from 'prop-types';
//
import BuyingItem from '../buying_item/BuyingItem';
import ShopCartBuy from '../../../../../components/shop_cart_buy/ShopCartBuy';
import BuyingStage from '../buying_stage/_main/BuyingStage';
//
import './BuyingShop.scss';
import { formatNum } from '../../../../../../../_some_function/FormatNum';
import InfoBuying from '../../../../../components/info_buying/InfoBuying';

//
BuyingShop.propTypes = {
    buy_shop: PropTypes.object,
    // buy_package_ix: PropTypes.number,
    buy_shop_ix: PropTypes.number,
    openConFirmCancelBuying: PropTypes.func,
    //
    // payment: PropTypes.string,
    // transport_price_model: PropTypes.number,
    // voucher_model: PropTypes.number,
};

//
function BuyingShop(props) {
    const {
        buy_shop,
        // buy_package_ix,
        buy_shop_ix,
        openConFirmCancelBuying,
    } = props;

    const {
        shop,
        products,
        status,
        //
        payment,
        transport_price_model,
        voucher_model,
    } = buy_shop;
    //
    const amount = products.reduce(
        (a, buy_product) =>
            a + buy_product.product.new_price * buy_product.quantity,
        0
    );

    //
    return (
        <div className="BuyingShop bg-primary">
            <div className="BuyingShop_row">
                <div className="display-flex">
                    <ShopCartBuy
                        id={shop.id}
                        name={shop.name}
                        picture={shop.picture}
                    />
                </div>

                <div>
                    <div className="BuyingShop_items-contain">
                        {products.map((buy_product, ix) => (
                            <BuyingItem
                                key={`BillBuying_item_${ix}`}
                                buy_product={buy_product}
                                status={status}
                                //
                                // buy_package_ix={buy_package_ix}
                                buy_shop_ix={buy_shop_ix}
                                buy_product_ix={ix}
                                //
                                openConFirmCancelBuying={
                                    openConFirmCancelBuying
                                }
                            />
                        ))}
                    </div>
                </div>

                <div className="BuyingShop_bot width-fit-content margin-auto">
                    <div className="label-field">
                        Total: {formatNum(amount)} VND
                    </div>

                    <div className="BuyingShop_bot-info box-shadow-1 brs-5px">
                        <InfoBuying
                            amount={
                                amount - transport_price_model - voucher_model
                            }
                            voucher_price={voucher_model}
                            transport_price={transport_price_model}
                            payment={payment}
                        />
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default BuyingShop;
