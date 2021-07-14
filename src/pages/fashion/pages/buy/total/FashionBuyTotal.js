import React from 'react';
import PropTypes from 'prop-types';
//
import InfoBuying from '../../../components/info_buying/InfoBuying';
//
import './FashionBuyTotal.scss';

//
FashionBuyTotal.propTypes = {};

//
function FashionBuyTotal({
    amount,
    transport_price,
    voucher_price,
    payment,
    shop_count,
    openConfirmBuy,
}) {
    //
    return (
        <div className="FashionBuyTotal bg-primary box-shadow-1 brs-5px">
            <div className="FashionBuyTotal_row flex-between-center">
                <h3 className="FashionBuyTotal_title margin-0">TOTAL</h3>

                <div className="FashionBuyTotal_right">
                    <InfoBuying
                        amount={+amount}
                        voucher_price={+voucher_price}
                        transport_price={+transport_price}
                        payment={payment}
                        shop_count={shop_count}
                    />

                    <div>
                        <button
                            className="FashionBuyTotal_buy btn btn-hv btn-active w-100per brs-5px cursor-pointer"
                            onClick={openConfirmBuy}
                        >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionBuyTotal;
