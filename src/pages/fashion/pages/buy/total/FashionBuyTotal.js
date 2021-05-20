import React from 'react';
import PropTypes from 'prop-types';
//
import InfoBuying from '../../../components/info_buying/InfoBuying';
//
import './FashionBuyTotal.scss';
//
FashionBuyTotal.propTypes = {};

//
function FashionBuyTotal(props) {
    const {
        amount,
        transport_price,
        voucher_price,
        payment,
        shop_count,
        openConfirmBuy,
    } = props;

    return (
        <div className="FashionBuyTotal bg-primary box-shadow-1 brs-5px">
            <div className="FashionBuyTotal_contain">
                <div className="FashionBuyTotal_row">
                    <div className="FashionBuyTotal_title label-field">
                        TOTAL
                    </div>

                    <div>
                        <InfoBuying
                            amount={+amount}
                            voucher_price={+voucher_price}
                            transport_price={+transport_price}
                            payment={payment}
                            shop_count={shop_count}
                        />

                        <div>
                            <div
                                className="FashionBuyTotal_buy brs-5px"
                                onClick={openConfirmBuy}
                            >
                                Buy now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionBuyTotal;
