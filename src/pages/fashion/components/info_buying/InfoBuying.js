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
    shop_count: PropTypes.number,
};

InfoBuying.defaultProps = {
    shop_count: 1,
};

//
function InfoBuying({
    amount,
    voucher_price,
    transport_price,
    payment,
    shop_count,
}) {
    //
    return (
        <table className="InfoBuying w-100per">
            <tbody>
                <tr>
                    <td>
                        <h3 className="margin-0">Payment:</h3>
                    </td>

                    <td>{payment}</td>
                </tr>

                <tr>
                    <td>
                        <h3 className="margin-0">Products:</h3>
                    </td>

                    <td>{formatNum(amount)}</td>
                </tr>

                <tr>
                    <td>
                        <h3 className="margin-0">Transport</h3>
                    </td>

                    <td>
                        {transport_price} x {shop_count}
                    </td>
                </tr>

                <tr>
                    <td>
                        <h3 className="margin-0">Free Ship</h3>
                    </td>

                    <td>
                        {voucher_price} x {shop_count}
                    </td>
                </tr>

                <tr>
                    <td>
                        <h3 className="margin-0">Total</h3>
                    </td>

                    <td className="font-500">
                        {formatNum(+amount + transport_price - voucher_price)} VND
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default InfoBuying;
