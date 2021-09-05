import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsBPaymentHead.scss';

//
FsBPaymentHead.propTypes = {};

//
function FsBPaymentHead({ payment_str, is_open, toggleChange }) {
    //
    return (
        <div className="FsBPaymentHead">
            <div className="FsBPaymentHead_row flex-between-center">
                <div className="text-222 font-18px">Phương thức thanh toán</div>

                <div className="FsBPaymentHead_right display-flex font-14px">
                    <div>{payment_str}</div>

                    <div
                        className={`FsBPaymentHead_change text-upper font-500 ${
                            is_open ? 'color-fashion' : 'text-blue'
                        }`}
                        onClick={toggleChange}
                    >
                        {is_open ? 'Hoàn thành' : 'Thay đổi'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsBPaymentHead;
