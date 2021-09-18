import React from 'react';
import PropTypes from 'prop-types';
//
import shopee_insurance from '../../../../../../../../image/shopee_insurance.png';
//
import './FsPPOrderPayment.scss';

//
FsPPOrderPayment.propTypes = {};

//
function FsPPOrderPayment({ payment_name }) {
    //
    return (
        <div className="FsPPOrderPayment">
            <div className="FsPPOrderPayment_row flex-end align-items-center">
                <div className="FsPPOrderPayment_left padding-10px">
                    <div className="inline-flex align-items-center">
                        <img
                            src={shopee_insurance}
                            alt=""
                            width="12"
                            height="12"
                        />

                        <span className="margin-left-5px font-12px text-third">
                            Phương thức Thanh toán
                        </span>
                    </div>
                </div>

                <div className="FsPPOrderPayment_right padding-10px text-align-end">
                    {payment_name}
                </div>
            </div>
        </div>
    );
}

export default FsPPOrderPayment;
