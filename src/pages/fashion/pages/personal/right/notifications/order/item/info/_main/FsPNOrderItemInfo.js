import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatLocalDateTimeString } from '../../../../../../../../../../_some_function/FormatDate';
//
import IconsArrow from '../../../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsPNOrderItemInfo.scss';
import { IS_MOBILE } from '../../../../../../../../../../_constant/Constant';

//
FsPNOrderItemInfo.propTypes = {};

//
function FsPNOrderItemInfo({
    order_id,
    logo,
    name,
    info,
    created_time,
    is_show,

    toggleProcess,
}) {
    //
    function onToggleProcess(e) {
        e.preventDefault();

        toggleProcess();
    }

    //
    return (
        <div className="FsPNOrderItemInfo padding-20px">
            <div className="FsPNOrderItemInfo_row display-flex space-between">
                <img
                    className="FsPNOrderItemInfo_logo flex-shrink-0 margin-right-20px object-fit-cover"
                    src={logo}
                    alt=""
                    width="80"
                    height="80"
                />

                <div className="flex-grow-1">
                    <div className="FsPNOrderItemInfo_name margin-bottom-10px font-16px">
                        {name}
                    </div>

                    <div className="FsPNOrderItemInfo_info">{info}</div>

                    <div
                        className="display-flex align-items-center text-third"
                        onClick={onToggleProcess}
                    >
                        <div className="FsPNOrderItemInfo_time margin-right-10px">
                            {formatLocalDateTimeString(created_time)}
                        </div>

                        <div
                            className={`FsPNOrderItemInfo_toggle cursor-pointer ${
                                is_show ? 'rotate-90' : ''
                            }`}
                        >
                            <IconsArrow x={200} size_icon="14px" />
                        </div>
                    </div>
                </div>

                {IS_MOBILE ? null : (
                    <div>
                        <Link
                            className="color-inherit"
                            to={`/fashion/user/purchase/order/${order_id}`}
                        >
                            <div className="FsPNOrderItemInfo_detail_contain border-blur padding-x-10px padding-y-4px font-14px">
                                Xem Chi tiết đơn hàng
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FsPNOrderItemInfo;
