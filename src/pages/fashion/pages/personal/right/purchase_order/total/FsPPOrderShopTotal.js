import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import './FsPPOrderShopTotal.scss';

//
FsPPOrderShopTotal.propTypes = {};

//
function FsPPOrderShopTotal({ total_price, trans_price, trans_discount }) {
    //
    const total_arr = [
        {
            title: 'Tổng tiền hàng',
            value: total_price,
        },
        {
            title: 'Phí vận chuyển',
            value: trans_price,
        },
        {
            title: 'Giảm giá phí vận chuyển',
            value: trans_discount,
        },
    ];

    //
    return (
        <div className="FsPPOrderShopTotal bg-fa text-align-end">
            {total_arr.map((item, ix) => (
                <div
                    key={ix}
                    className="FsPPOrderShopTotal_row flex-end align-items-center"
                >
                    <div className="FsPPOrderShopTotal_left padding-10px">
                        {item.title}
                    </div>

                    <div className="FsPPOrderShopTotal_right padding-10px">
                        ₫{formatNum(item.value)}
                    </div>
                </div>
            ))}

            <div className="FsPPOrderShopTotal_row flex-end align-items-center">
                <div className="FsPPOrderShopTotal_left padding-10px">
                    Tổng số tiền
                </div>

                <div className="FsPPOrderShopTotal_right padding-10px color-fashion font-18px">
                    ₫{formatNum(total_price + trans_price - trans_discount)}
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default FsPPOrderShopTotal;
