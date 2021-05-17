import React from 'react';
import PropTypes from 'prop-types';

import './PaymentChoice.scss';
//
PaymentChoice.propTypes = {
    
};

//
function PaymentChoice(props) {
    const {payment_item, payment_ix, is_active, handleChangePayment} = props;
    //
    function onChangePayment() {
        handleChangePayment(payment_ix)
    }
    
    return (
        <div>
            <div className={`PaymentChoice_contain ${is_active ? 'PaymentChoice_contain-active' : ''}`}>
                <div className="PaymentChoice_row">
                    <div className="PaymentChoice_item label-field" onClick={onChangePayment}>{payment_item}</div>
                </div>
            </div>
        </div>
    );
}

export default PaymentChoice;