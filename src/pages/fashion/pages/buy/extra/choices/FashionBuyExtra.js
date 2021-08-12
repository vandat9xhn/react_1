import React from 'react';
import PropTypes from 'prop-types';
//
import { useCloseScreen } from '../../../../../../_hooks/useCloseScreen';
// 
import TransportationChoices from '../../transportation/choices/_main/TransportationChoices';
import PaymentChoices from '../../payment/choices/_main/PaymentChoices';
import VoucherChoices from '../../voucher/choices/_main/VoucherChoices';

//
FashionBuyExtra.propTypes = {};

//
function FashionBuyExtra({
    extra_buy,
    amount,

    handlePayment,
    handleTransport,
    handleVoucher,

    closeExtraBuy,
}) {
    //
    useCloseScreen(closeExtraBuy);

    //
    return (
        <div className="pos-fixed-100v z-index-lv5 bg-screen">
            <div className="form-fixed bg-primary">
                <div
                    className={`${
                        extra_buy == 'transport' ? '' : 'display-none'
                    }`}
                >
                    <TransportationChoices
                        handleTransport={handleTransport}
                        closeTransport={closeExtraBuy}
                    />
                </div>

                <div
                    className={`${
                        extra_buy == 'payment' ? '' : 'display-none'
                    }`}
                >
                    <PaymentChoices
                        handlePayment={handlePayment}
                        closePayment={closeExtraBuy}
                    />
                </div>

                <div
                    className={`${
                        extra_buy == 'voucher' ? '' : 'display-none'
                    }`}
                >
                    <VoucherChoices
                        amount={amount}
                        handleVoucher={handleVoucher}
                        closeVoucher={closeExtraBuy}
                    />
                </div>
            </div>
        </div>
    );
}

export default FashionBuyExtra;
