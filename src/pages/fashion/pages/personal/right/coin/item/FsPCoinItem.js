import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../_some_function/FormatDate';
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import coin_img from '../../../../../../../../image/coin.png';
//
import './FsPCoinItem.scss';

//
FsPCoinItem.propTypes = {};

//
function FsPCoinItem({ name, reason, img, coin_change, end_time }) {
    //
    return (
        <div className="FsPCoinItem padding-12px">
            <div className="FsPCoinItem_row flex-between-center">
                <div className="display-flex align-items-center">
                    <img
                        className={`brs-50 ${
                            coin_change > 0 || img ? '' : 'FsPCoinItem_img-gray'
                        }`}
                        src={img || coin_img}
                        alt=""
                        width="78"
                        height="78"
                    />

                    <div className="padding-left-10px">
                        <div className="font-16px">{name}</div>

                        <div className="font-14px line-16px">{reason}</div>

                        <div className="text-del font-14px line-16px">
                            {formatLocalDateTimeString(end_time)}
                        </div>
                    </div>
                </div>

                <div
                    className={`font-20px ${
                        coin_change > 0 ? 'text-gold' : ''
                    }`}
                >
                    {coin_change > 0 ? '+' : ''}
                    {formatNum(coin_change)}
                </div>
            </div>
        </div>
    );
}

export default FsPCoinItem;
