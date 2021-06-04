import React from 'react';
import PropTypes from 'prop-types';
//
import './PaymentChoice.scss';

//
PaymentChoice.propTypes = {};

//
function PaymentChoice({ payment_item, payment_ix, is_active, handlePayment }) {
    //
    function onChangePayment() {
        handlePayment(payment_ix);
    }

    return (
        <div
            className={`PaymentChoice padding-8px hv-bg-blur cursor-pointer ${
                is_active ? 'PaymentChoice_active text-blue' : ''
            }`}
            onClick={onChangePayment}
        >
            <div
                className="label-field"
            >
                {payment_item.name}
            </div>
        </div>
    );
}

export default PaymentChoice;
