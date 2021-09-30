import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { formatLocalDateString } from '../../../../../../../../_some_function/FormatDate';
//
import IconsArrow from '../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import coin_img from '../../../../../../../../../image/coin.png';
//
import './FsPCoinHeadMb.scss';

//
FsPCoinHeadMb.propTypes = {};

//
function FsPCoinHeadMb({ coin, end_time }) {
    //
    return (
        <div className="FsPCoinHeadMb padding-10px">
            <div className="display-flex space-between">
                <div className="display-flex align-items-center">
                    <img src={coin_img} alt="" width="30" height="30" />

                    <div className="FsPCoinHeadMb_coin margin-left-10px text-gold">
                        {coin} xu
                    </div>
                </div>

                <div>
                    <Link
                        className="inline-flex align-items-center font-14px text-gold"
                        to={`/fashion/coins`}
                    >
                        <span className="margin-right-5px">Nhận thêm</span>

                        <IconsArrow x={200} size_icon="12px" />
                    </Link>
                </div>
            </div>

            <div className="margin-top-5px">
                <Link
                    className="inline-flex align-items-center text-del font-12px"
                    to={`/fashion/user/coin/expiration`}
                >
                    <span className="margin-right-5px">
                        HSD: {formatLocalDateString(end_time)}
                    </span>

                    <IconsArrow x={200} size_icon="12px" />
                </Link>
            </div>
        </div>
    );
}

export default FsPCoinHeadMb;
