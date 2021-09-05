import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import './FashionBuyTotal.scss';

//
FashionBuyTotal.propTypes = {};

//
function FashionBuyTotal({ total_price, total_ship_price, total_voucher }) {
    //
    const buy_total_arr = [
        {
            title: 'Tổng tiền hàng',
            value: '₫' + formatNum(total_price),
        },
        {
            title: 'Phí vận chuyển',
            value: '₫' + formatNum(total_ship_price),
        },
        {
            title: 'Tổng cộng Voucher giảm giá',
            value: '-₫' + formatNum(total_voucher),
        },
    ];

    //
    return (
        <div className="FashionBuyTotal bg-primary font-14px">
            <div className="FashionBuyTotal_cal">
                {buy_total_arr.map((item, ix) => (
                    <div
                        key={ix}
                        className="FashionBuyTotal_cal_row padding-y-8px flex-end text-third"
                    >
                        <div className="FashionBuyTotal_cal_left">
                            {item.title}
                        </div>

                        <div className="FashionBuyTotal_cal_right text-align-end">
                            {item.value}
                        </div>
                    </div>
                ))}

                <div className="FashionBuyTotal_cal_row padding-y-8px flex-end align-items-center">
                    <div className="FashionBuyTotal_cal_left text-third">
                        Tổng thanh toán:
                    </div>

                    <div className="FashionBuyTotal_cal_right color-fashion font-20px text-align-end">
                        ₫
                        {formatNum(
                            total_price + total_ship_price - total_voucher
                        )}
                    </div>
                </div>
            </div>

            <div className="FashionBuyTotal_buy flex-between-center">
                <div className="FashionBuyTotal_privacy">
                    <span className="margin-right-5px text-third">
                        Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                    </span>
                    
                    <Link to="/fashion/privacy">Điều khoản</Link>
                </div>

                <div>
                    <button className="FashionBuyTotal_btn btn btn-hv bn-active padding-6px brs-3px bg-fashion-red text-cap text-white font-400 font-16px cursor-pointer">
                        Đặt hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FashionBuyTotal;
