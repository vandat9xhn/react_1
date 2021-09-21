import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatLocalDateTimeString } from '../../../../../../../../../../_some_function/FormatDate';
//
import IconsArrow from '../../../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsPNOrderItemInfo.scss';

//
FsPNOrderItemInfo.propTypes = {};

//
function FsPNOrderItemInfo({
    order_id,
    img,
    title,
    info,
    created_time,
    is_show,
    toggleProcess,
}) {
    //
    return (
        <div className="FsPNOrderItemInfo padding-20px">
            <div className="FsPNOrderItemInfo_row display-flex space-between">
                <div className="flex-shrink-0 margin-right-20px">
                    <img
                        className="object-fit-cover"
                        src={img}
                        alt=""
                        width="80"
                        height="80"
                    />
                </div>

                <div className="flex-grow-1">
                    <div className="margin-bottom-10px font-16px">{title}</div>

                    <div>{info}</div>

                    <div className="display-flex align-items-center text-third">
                        <div className="margin-right-10px">
                            {formatLocalDateTimeString(created_time)}
                        </div>

                        <div
                            className={`FsPNOrderItemInfo_toggle cursor-pointer ${
                                is_show ? 'rotate-90' : ''
                            }`}
                            onClick={toggleProcess}
                        >
                            <IconsArrow x={200} size_icon="14px" />
                        </div>
                    </div>
                </div>

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
            </div>
        </div>
    );
}

export default FsPNOrderItemInfo;
