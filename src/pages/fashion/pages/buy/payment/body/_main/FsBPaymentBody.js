import React from 'react';
import PropTypes from 'prop-types';
//
import FsBPmBank from '../bank/_main/FsBPmBank';
import FsBPmCOD from '../cod/FsBPmCOD';
import FsBPmTitleItem from '../title_item/FsBPmTitleItem';
// 
import './FsBPaymentBody.scss';

//
FsBPaymentBody.propTypes = {};

//
function FsBPaymentBody({
    payment_arr,
    payment_ix,
    bank_card_arr,

    handleChangePayment,
    getData_Bank_L,
    openOtherBank,
    handleChooseCard,
}) {
    //
    return (
        <div className="FsBPaymentBody">
            <div className="FsBPaymentBody_head overflow-x-auto scroll-height-0">
                <div className="display-flex">
                    {payment_arr.map((payment_obj, ix) => (
                        <div key={ix} className="margin-right-10px">
                            <FsBPmTitleItem
                                ix={ix}
                                title={payment_obj.name}
                                is_active={ix == payment_ix}
                                handleChangePayment={handleChangePayment}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {payment_ix == 1 ? (
                    <FsBPmBank
                        bank_card_arr={bank_card_arr}
                        getData_Bank_L={getData_Bank_L}
                        openOtherBank={openOtherBank}
                        handleChooseCard={handleChooseCard}
                    />
                ) : payment_ix == 2 ? (
                    <FsBPmCOD />
                ) : null}
            </div>
        </div>
    );
}

export default FsBPaymentBody;
