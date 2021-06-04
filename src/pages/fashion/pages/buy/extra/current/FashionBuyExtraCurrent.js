import React from 'react';
import PropTypes from 'prop-types';
//
import TransportCurrent from '../../transportation/current/TransportCurrent';
import PaymentCurrent from '../../payment/current/PaymentCurrent';
import VoucherCurrent from '../../voucher/current/VoucherCurrent';

//
FashionBuyExtraCurrent.propTypes = {};

//
function FashionBuyExtraCurrent({
    transport_name,
    transport_title,
    transport_price,
    transport_has_choose,
    
    payment_name,
    
    voucher_name,
    voucher_price,
    voucher_info,
    voucher_has_choose,

    doNotUseVoucher,
    handleExtraBuy,
}) {
    return (
        <div>
            <div>
                <TransportCurrent
                    name={transport_name}
                    title={transport_title}
                    price={transport_price}
                    has_choose={transport_has_choose}
                    handleExtraBuy={handleExtraBuy}
                />
            </div>

            <div>
                <PaymentCurrent
                    name={payment_name}
                    handleExtraBuy={handleExtraBuy}
                />
            </div>

            <div>
                <VoucherCurrent
                    name={voucher_name}
                    cost={voucher_price}
                    info={voucher_info}
                    has_choose={voucher_has_choose}
                    handleExtraBuy={handleExtraBuy}
                    doNotUseVoucher={doNotUseVoucher}
                />
            </div>
        </div>
    );
}

export default FashionBuyExtraCurrent;
