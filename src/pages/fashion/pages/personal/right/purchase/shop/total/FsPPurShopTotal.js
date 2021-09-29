import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../../_some_function/FormatNum';
//
import shopee_insurance from '../../../../../../../../../image/shopee_insurance.png';
//
import './FsPPurShopTotal.scss';

//
FsPPurShopTotal.propTypes = {};

//
function FsPPurShopTotal({ total_price, buyAgain, contactWithSeller }) {
    //
    return (
        <div className="FsPPurShopTotal font-14px">
            <div className="FsPPurShopTotal_total flex-end align-items-center">
                <img src={shopee_insurance} alt="" width="16" height="16" />

                <div className="margin-left-5px">Tổng số tiền:</div>

                <div className="FsPPurShopTotal_total_price margin-left-10px font-24px color-fashion">
                    ₫{formatNum(total_price)}
                </div>
            </div>

            <div className="FsPPurShopTotal_feedback flex-between-center">
                <div className="text-del font-12px">Chưa nhận đánh giá</div>

                <div className="display-flex">
                    <button
                        type="button"
                        className="FsPPurShopTotal_btn padding-10px brs-3px btn btn-hv cursor-pointer bg-fashion-red text-cap text-white"
                        onClick={buyAgain}
                    >
                        Mua lại
                    </button>

                    <button
                        type="button"
                        className="FsPPurShopTotal_btn margin-left-10px padding-10px border-blur brs-3px cursor-pointer hv-bg-blur text-cap text-secondary"
                        onClick={contactWithSeller}
                    >
                        Liên hệ người bán
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FsPPurShopTotal;
