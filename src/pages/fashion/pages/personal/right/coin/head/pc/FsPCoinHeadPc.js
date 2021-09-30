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
import './FsPCoinHeadPc.scss';

//
FsPCoinHeadPc.propTypes = {};

//
function FsPCoinHeadPc({ coin, end_time }) {
    //
    return (
        <div className="FsPCoinHeadPc padding-y-16px padding-x-20px">
            <div className="FsPCoinHeadPc_row flex-between-center">
                <div className="display-flex align-items-center">
                    <img src={coin_img} alt="" width="48" height="48" />

                    <div className="FsPCoinHeadPc_coin text-gold padding-left-15px padding-right-10px">
                        {coin}
                    </div>

                    <div>
                        <div className="line-16px text-gold font-16px">
                            Xu đang có
                        </div>

                        <div>
                            <Link
                                className="inline-flex align-items-center text-del font-14px"
                                to={`/fashion/user/coin/expiration`}
                            >
                                <span className="margin-right-5px">
                                    {coin} xu sẽ hết hạn vào{' '}
                                    {formatLocalDateString(end_time)}
                                </span>

                                <IconsArrow x={200} size_icon="12px" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Link
                        className="inline-flex align-items-center font-16px text-gold"
                        to={`/fashion/coins`}
                    >
                        <span className="margin-right-5px">Nhận thêm xu</span>

                        <IconsArrow x={200} size_icon="14px" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FsPCoinHeadPc;
