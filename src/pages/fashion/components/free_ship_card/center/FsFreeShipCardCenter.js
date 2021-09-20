import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateString } from '../../../../../_some_function/FormatDate';
//
import './FsFreeShipCardCenter.scss';

//
FsFreeShipCardCenter.propTypes = {};

//
function FsFreeShipCardCenter({
    title_center_1,
    title_center_2,
    title_center_3,

    used_count,
    end_time,
}) {
    //
    return (
        <div className="FsFreeShipCardCenter h-100per padding-x-8px flex-grow-1 display-flex flex-col">
            <div className="FsFreeShipCardCenter_payment wk-box-vertical line-clamp-2 line-20px overflow-hidden">
                {title_center_1 ? (
                    <div className="inline-flex margin-right-5px fashion-value-padding bg-fashion-red text-white font-12px line-16px text-nowrap">
                        <div className="inline-flex">
                            <span>{title_center_1}</span>
                        </div>
                    </div>
                ) : null}

                {title_center_2 ? (
                    <span className="font-14px">{title_center_2}</span>
                ) : null}
            </div>

            {title_center_3 ? (
                <div className="display-flex margin-top-8px">
                    <div className="FsFreeShipCardCenter_transporter color-fashion font-12px line-16px text-nowrap">
                        {title_center_3}
                    </div>
                </div>
            ) : null}

            <div className="FsFreeShipCardCenter_date margin-top-8px font-12px">
                {used_count ? (
                    <span className="margin-right-5px color-fashion">
                        Đã sử dụng {used_count}
                    </span>
                ) : null}

                <span className="text-secondary">
                    HSD: {formatLocalDateString(end_time)}
                </span>
            </div>
        </div>
    );
}

export default FsFreeShipCardCenter;
