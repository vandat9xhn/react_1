import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
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
                <img
                    className="FsPNCommonItem_logo object-fit-cover"
                    src={logo}
                    alt=""
                    width="80"
                    height="80"
                />

                <div className="FsPNCommonItem_center flex-grow-1 margin-x-20px">
                    <h2 className="FsPNCommonItem_name margin-bottom-10px font-16px font-400">
                        {name}
                    </h2>

                    <div className="FsPNCommonItem_info text-third">{info}</div>

                    {img ? (
                        <div className="margin-y-5px">
                            <img
                                className="FsPNCommonItem_img object-fit-cover"
                                src={img}
                                alt=""
                                width="400"
                                height="200"
                            />
                        </div>
                    ) : null}

                    <div className="FsPNCommonItem_time text-del">
                        {formatLocalDateTimeString(created_time)}
                    </div>
                </div>

                {IS_MOBILE ? null : (
                    <div>
                        <Link
                            className={`color-inherit font-12px text-cap`}
                            to={link_to}
                        >
                            <div className="FsPNCommonItem_link_contain padding-y-4px padding-x-8px border-blur hv-cl-fashion text-nowrap">
                                Xem chi tiết
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FsPNCommonItem;
