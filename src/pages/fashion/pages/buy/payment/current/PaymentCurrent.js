import React from 'react';
import PropTypes from 'prop-types';

//
PaymentCurrent.propTypes = {
    name: PropTypes.string,
    handleExtraBuy: PropTypes.func,
};

function PaymentCurrent({ name, handleExtraBuy }) {
    //
    function onChooseExtraBuy() {
        handleExtraBuy('payment');
    }

    //
    return (
        <div className="PaymentCurrent">
            <div className="FashionChoiceCurrent_row flex-between-center">
                <h3 className="margin-0">Payment</h3>

                <div className="FashionChoiceCurrent_right">
                    <div className="text-blue">{name}</div>

                    <div
                        className="FashionChoiceCurrent_change"
                        onClick={onChooseExtraBuy}
                    >
                        Change
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentCurrent;
