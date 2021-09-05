import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import FsBPaymentHead from '../head/FsBPaymentHead';
// 
import './FsBuyPayment.scss';

//
FsBuyPayment.propTypes = {};

function FsBuyPayment({ payment_str, handleChangePayment }) {
    //
    const [state_obj, setStateObj] = useState({
        is_open: false,
    });

    const { is_open } = state_obj;

    //
    function toggleChange() {
        setStateObj({
            ...state_obj,
            is_open: !is_open
        })
    }

    //
    return (
        <div className="FsBuyPayment bg-primary">
            <div>
                <FsBPaymentHead
                    payment_str={payment_str}
                    is_open={is_open}
                    toggleChange={toggleChange}
                />
            </div>

            <div></div>
        </div>
    );
}

export default FsBuyPayment;
