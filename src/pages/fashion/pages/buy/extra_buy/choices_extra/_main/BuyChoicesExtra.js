import React from 'react';
import PropTypes from 'prop-types';
//
import TransportationChoices from '../../../transportation/choices/_main/TransportationChoices';
import PaymentChoices from '../../../payment/choices/_main/PaymentChoices';
import VoucherChoices from '../../../voucher/choices/_main/VoucherChoices';

//
BuyChoicesExtra.propTypes = {
    extra_buy: PropTypes.string,
    // 
    arr_transport: PropTypes.array,
    cur_transport: PropTypes.object,
    handleChangeTransport: PropTypes.func,
    // 
    arr_payment: PropTypes.array,
    payment_ix: PropTypes.number,
    handleChangePayment: PropTypes.func,
    // 
    amount: PropTypes.number,
    arr_voucher: PropTypes.array,
    voucher_ix: PropTypes.number,
    handleChangeVoucher: PropTypes.func,
    // 
    closeExtraBuy: PropTypes.func,
};

//
function BuyChoicesExtra(props) {
    const {
        extra_buy,
        arr_transport,
        cur_transport,
        handleChangeTransport,
        // 
        arr_payment,
        payment_ix,
        handleChangePayment,
        // 
        amount,
        has_fetched_voucher,
        arr_voucher,
        voucher_ix,
        handleChangeVoucher,
        // 
        closeExtraBuy,
    } = props;

    //
    return (
        <div className="FashionBuy_choice-div form-fixed scroll-thin App_box_shadow brs-5px">
            {extra_buy == 'transport' && (
                <TransportationChoices
                    arr_transport={arr_transport}
                    cur_transport={cur_transport}
                    handleChangeTransport={handleChangeTransport}
                    closeExtraBuy={closeExtraBuy}
                />
            )}

            {extra_buy == 'payment' && (
                <PaymentChoices
                    arr_payment={arr_payment}
                    payment_ix={payment_ix}
                    handleChangePayment={handleChangePayment}
                    closeExtraBuy={closeExtraBuy}
                />
            )}

            {extra_buy == 'voucher' && (
                <VoucherChoices
                    amount={amount}
                    has_fetched={has_fetched_voucher}
                    arr_voucher={arr_voucher}
                    voucher_ix={voucher_ix}
                    handleChangeVoucher={handleChangeVoucher}
                    closeExtraBuy={closeExtraBuy}
                />
            )}
        </div>
    );
}

export default BuyChoicesExtra;
