import React from 'react';
import PropTypes from 'prop-types';
// 
import { formatNum } from '../../../../_some_function/FormatNum';
// 
import './InfoBuying.scss';

//
InfoBuying.propTypes = {
    amount: PropTypes.number,
    voucher_price: PropTypes.number,
    transport_price: PropTypes.number,
    payment: PropTypes.string,
};

//
function InfoBuying(props) {
    const { amount, voucher_price, transport_price, payment } = props;

    //
    return (
        <div className="display-flex justify-content-center">
            <div className="text-align-left label-field">
                <div>Payment:</div>
                <div>Products:</div>
                <div>Transportation:</div>
                <div>Voucher:</div>
                <div>Total:</div>
            </div>

            <div className="InfoBuying_calculate">
                <div>{payment}</div>
                <div>{formatNum(amount)}</div>
                <div>{formatNum(transport_price)}</div>
                <div>-{formatNum(voucher_price)}</div>
                <div className="label-field">
                    {formatNum(+amount + transport_price - voucher_price)} VND
                </div>
            </div>
        </div>
    );
}

export default InfoBuying;
