import React from 'react';
import PropTypes from 'prop-types';
//
import TransportCurrent from '../../../transportation/current/TransportCurrent';
import PaymentCurrent from '../../../payment/current/PaymentCurrent';
import VoucherCurrent from '../../../voucher/current/VoucherCurrent';

//
BuyCurExtra.propTypes = {
    name_trans: PropTypes.string,
    title_trans: PropTypes.string,
    price_trans: PropTypes.number,
    //
    name_payment: PropTypes.string,
    //
    name_voucher: PropTypes.string,
    title_voucher: PropTypes.string,
    price_voucher: PropTypes.number,
    //
    handleChooseExtraBuy: PropTypes.func,
    doNotUseVoucher: PropTypes.func,
};

//
function BuyCurExtra(props) {
    const {
        name_trans,
        title_trans,
        price_trans,
        //
        name_payment,
        //
        name_voucher,
        title_voucher,
        price_voucher,
        //
        handleChooseExtraBuy,
        doNotUseVoucher,
    } = props;

    //
    return (
        <div>
            <div>
                <TransportCurrent
                    name={name_trans}
                    title={title_trans}
                    price={price_trans}
                    handleChooseExtraBuy={handleChooseExtraBuy}
                />
            </div>

            <div>
                <PaymentCurrent
                    name={name_payment}
                    handleChooseExtraBuy={handleChooseExtraBuy}
                />
            </div>

            <div>
                <VoucherCurrent
                    name={name_voucher}
                    price={price_voucher}
                    title={title_voucher}
                    handleChooseExtraBuy={handleChooseExtraBuy}
                    doNotUseVoucher={doNotUseVoucher}
                />
            </div>
        </div>
    );
}

export default BuyCurExtra;
