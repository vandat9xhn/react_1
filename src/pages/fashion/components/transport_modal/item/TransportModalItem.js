import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import IconSent from '../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './TransportModalItem.scss';

//
TransportModalItem.propTypes = {};

//
function TransportModalItem({
    name,
    price,
    delay_message,
    str_date_to,
    by_time,

    ix,
    is_active,

    handleChoose,
}) {
    //
    function onChoose() {
        handleChoose(ix);
    }

    //
    return (
        <div
            className={`TransportModalItem padding-20px cursor-pointer ${
                is_active ? 'TransportModalItem-active' : ''
            }`}
            onClick={onChoose}
        >
            <div className="TransportModalItem_row display-flex-center">
                <div className="TransportModalItem_left flex-grow-1">
                    <div className="TransportModalItem_name font-16px">
                        <span>{name}</span>

                        <span className="margin-left-20px color-fashion">
                            ₫{formatNum(price)}
                        </span>
                    </div>

                    <div className="text-third font-12px">
                        Nhận hàng {by_time ? 'trong' : 'vào'} {str_date_to}
                    </div>

                    <div className="text-third font-12px">
                        Cho phép Thanh toán khi nhận hàng
                    </div>

                    <div className="text-third font-12px">
                        ({delay_message})
                    </div>
                </div>

                <div className="TransportModalItem_right">
                    <div
                        className={`TransportModalItem_tick h-100per ${
                            is_active ? 'display-flex-center' : 'display-none'
                        }`}
                    >
                        <IconSent
                            stroke="var(--fashion-head)"
                            size_icon="1.25rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportModalItem;
