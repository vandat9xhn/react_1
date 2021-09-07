import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsBPaymentHead.scss';

//
FsBPaymentHead.propTypes = {};

//
function FsBPaymentHead({ payment_str, is_open, toggleChange }) {
    //
    return (
        <div
            className="FsBPaymentHead"
            onClick={IS_MOBILE ? toggleChange : undefined}
        >
            <div className="FsBPaymentHead_row flex-between-center">
                <div className="FsBPaymentHead_title text-222 font-18px">
                    Phương thức thanh toán
                </div>

                <div className="FsBPaymentHead_right display-flex font-14px">
                    <div>{payment_str}</div>

                    {IS_MOBILE ? (
                        <div className="margin-left-5px">
                            <IconsArrow x={200} size_icon="0.75rem" />
                        </div>
                    ) : (
                        <div
                            className={`FsBPaymentHead_change text-upper font-500 cursor-pointer ${
                                is_open ? 'color-fashion' : 'text-blue'
                            }`}
                            onClick={toggleChange}
                        >
                            {is_open ? 'Hoàn thành' : 'Thay đổi'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FsBPaymentHead;
