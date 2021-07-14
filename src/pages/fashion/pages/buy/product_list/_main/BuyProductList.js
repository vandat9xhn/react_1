import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
import BuyShop from '../buy_shop/BuyShop';
//
import './BuyProductList.scss';

//
BuyProductList.propTypes = {
    buy_shops: PropTypes.array,
    amount: PropTypes.number,
};
BuyProductList.defaultProps = {
    buy_shops: [],
    amount: 0,
};

//
function BuyProductList({ buy_shops, amount }) {
    //
    return (
        <div>
            <div className="BuyProductList box-shadow-1 brs-5px">
                <h2 className="BuyProductList_title margin-0 padding-8px text-align-center text-secondary">
                    PRODUCTS
                </h2>

                {buy_shops.map((buy_shop, action_ix) => (
                    <div
                        className="FashionBuy_shop"
                        key={`BuyProductList${action_ix}`}
                    >
                        <BuyShop
                            checked_products={buy_shop.products}
                            shop={buy_shop.shop}
                        />
                    </div>
                ))}

                <div className="BuyProductList_amount padding-8px text-align-center label-field">
                    {formatNum(amount)} VND
                </div>
            </div>
        </div>
    );
}

export default BuyProductList;
