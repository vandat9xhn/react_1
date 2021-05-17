import React from 'react';
import PropTypes from 'prop-types';

//
PaymentCurrent.propTypes = {
    name: PropTypes.string,
    handleChooseExtraBuy: PropTypes.func,
};

function PaymentCurrent(props) {
    const {name, handleChooseExtraBuy} = props;
    //
    function onChooseExtraBuy() {
        handleChooseExtraBuy('payment')
    }

    //
    return (
        <div className="PaymentCurrent">
            <div className="FashionChoiceCurrent_contain">
                <div className="FashionChoiceCurrent_row">
                    <div className="FashionChoiceCurrent_title label-field">Payment</div>

                    <div className="FashionChoiceCurrent_right">
                        <div className="text-blue">{name}</div>
                        <div className="FashionChoiceCurrent_change" onClick={onChooseExtraBuy}>Change</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentCurrent;