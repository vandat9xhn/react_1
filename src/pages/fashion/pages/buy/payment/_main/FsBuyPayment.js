import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import FsBPaymentHead from '../head/FsBPaymentHead';
import FsBPaymentBody from '../body/_main/FsBPaymentBody';
//
import './FsBuyPayment.scss';

//
FsBuyPayment.propTypes = {};

function FsBuyPayment({
    payment_arr,
    payment_ix,
    bank_card_arr,

    handleChangePayment,
    getData_Bank_L,
    openOtherBank,
    handleChooseCard,
}) {
    //
    const [state_obj, setStateObj] = useState({
        is_open: false,
    });

    const { is_open } = state_obj;

    //
    function toggleChange() {
        setStateObj({
            ...state_obj,
            is_open: !is_open,
        });
    }

    //
    return (
        <div className="FsBuyPayment bg-primary">
            <div>
                <FsBPaymentHead
                    payment_str={payment_arr[payment_ix].name}
                    is_open={is_open}
                    toggleChange={toggleChange}
                />
            </div>

            <div className={`${is_open ? '' : 'display-none'}`}>
                <FsBPaymentBody
                    payment_arr={payment_arr}
                    payment_ix={payment_ix}
                    bank_card_arr={bank_card_arr}
                    //
                    handleChangePayment={handleChangePayment}
                    getData_Bank_L={getData_Bank_L}
                    openOtherBank={openOtherBank}
                    handleChooseCard={handleChooseCard}
                />
            </div>
        </div>
    );
}

export default FsBuyPayment;
