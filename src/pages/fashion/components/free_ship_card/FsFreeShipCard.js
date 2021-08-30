import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatLocalDateString } from '../../../../_some_function/FormatDate';
//
import RadioCustom from '../../../../component/input/radio_custom/RadioCustom';
//
import './FsFreeShipCard.scss';

//
FsFreeShipCard.propTypes = {};

//
function FsFreeShipCard({
    left_elm,

    title_center_1,
    title_center_2,
    title_center_3,

    out_date,
    used_count,
    can_use,
    is_active,

    handleChoose,
}) {
    //
    return (
        <div className="FsFreeShipCard">
            <div className="FsFreeShipCard_row display-flex">
                <div className="display-flex-center bg-ccc pos-rel">
                    {left_elm}

                    <div className="FsFreeShipCard_voucher_side pos-abs left-0 width-0 trans-x--50per"></div>
                </div>

                <div className="FsFreeShipCard_center display-flex flex-col">
                    <div className="FsFreeShipCard_payment overflow-hidden">
                        {title_center_1 ? (
                            <div className="inline-flex fashion-value-padding bg-fashion-red text-white font-12px">
                                {title_center_1}
                            </div>
                        ) : null}

                        {title_center_2 ? (
                            <span className="font-14px">{title_center_2}</span>
                        ) : null}
                    </div>

                    {title_center_3 ? (
                        <div className="FsFreeShipCard_transporter color-fashion font-12px">
                            {title_center_3}
                        </div>
                    ) : null}

                    <div className="FsFreeShipCard_date font-12px">
                        {used_count ? (
                            <span className="color-fashion">
                                Đã sử dụng {used_count}
                            </span>
                        ) : null}

                        <span className="text-secondary">
                            HSD: {formatLocalDateString(out_date)}
                        </span>
                    </div>
                </div>

                <div className="display-flex flex-col justify-content-center">
                    <div className="flex-grow_1 display-flex-center">
                        {can_use ? (
                            <div
                                className="cursor-pointer"
                                onClick={handleChoose}
                            >
                                <RadioCustom is_active={is_active} />
                            </div>
                        ) : null}
                    </div>

                    <Link
                        to="/fashion/free-ship-condition"
                        className="font-14px"
                    >
                        Điều kiện
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FsFreeShipCard;
