import React from 'react';
import PropTypes from 'prop-types';
// 
import ScreenBlurBodyNotHidden from '../../../../../../component/_screen_blur/_main/ScreenBlurBodyNotHidden';
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
    return (
        <ScreenBlurBodyNotHidden closeScreen={closeExtraBuy}>
            <div>
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
        </ScreenBlurBodyNotHidden>
    );
}

export default FashionBuyExtra;
