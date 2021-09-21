import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatLocalDateTimeString } from '../../../../../../../../_some_function/FormatDate';
// 
import './FsPNCommonItem.scss';

//
FsPNCommonItem.propTypes = {};

//
function FsPNCommonItem({ logo, name, info, img, created_time, link_to }) {
    //
    return (
        <div className="FsPNCommonItem padding-20px font-14px">
            <div className="FsPNCommonItem_row display-flex space-between">
                <div className="margin-right-20px">
                    <img
                        className="object-fit-cover"
                        src={logo}
                        alt=""
                        width="80"
                        height="80"
                    />
                </div>

                <div className="flex-grow-1 margin-right-20px">
                    <h2 className="margin-bottom-10px font-16px font-400">
                        {name}
                    </h2>

                    <div className="text-third">{info}</div>

                    {img ? (
                        <div className="margin-top-5px margin=bottom-5px">
                            <img
                                className="object-fit-cover"
                                src={img}
                                alt=""
                                width="400"
                                height="200"
                            />
                        </div>
                    ) : null}

                    <div className="text-del">
                        {formatLocalDateTimeString(created_time)}
                    </div>
                </div>

                <div>
                    <Link className={`color-inherit font-12px text-cap`} to={link_to}>
                        <div className="FsPNCommonItem_link_contain padding-y-4px padding-x-8px border-blur hv-cl-fashion text-nowrap">
                            Xem chi tiết
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FsPNCommonItem;
