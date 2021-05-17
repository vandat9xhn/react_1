import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PaymentChoice from '../choice/PaymentChoice';

import './PaymentChoices.scss';
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
PaymentChoices.propTypes = {
    
};

//
function PaymentChoices(props) {
    //
    const {arr_payment, payment_ix, handleChangePayment, closeExtraBuy} = props;
    //
    return (
        <div>
            <div className="PaymentChoices_contain">
                <div className="FashionChoices_title">Payment</div>
                
                <div className="PaymentChoices_body">
                    {arr_payment.map((pm, pm_ix) => (
                        <PaymentChoice
                            key={`PaymentChoices_${pm_ix}`}
                            payment_item={pm}
                            payment_ix={pm_ix}
                            is_active={payment_ix == pm_ix}
                            handleChangePayment={handleChangePayment}
                        />
                    ))}
                </div>

                <div className="PaymentChoices_close" onClick={closeExtraBuy}>
                    <div className="PaymentChoices_close-icon brs-50 hv-opacity">
                        <IconsArrow y={400} size_icon="1rem"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentChoices;