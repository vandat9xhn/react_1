import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import fire from '../../../../../image/fire.png';
import flash_sale_bar from '../../../../../image/flash_sale_bar.png';
import './FashionFlashSaleBar.scss';

//
FashionFlashSaleBar.propTypes = {
    sold: PropTypes.number,
    total: PropTypes.number,
};

//
function FashionFlashSaleBar({ sold, total }) {
    //
    return (
        <div
            className={`FashionFlashSaleBar pos-rel margin-auto ${
                IS_MOBILE ? 'padding-6px' : 'padding-8px'
            }`}
        >
            <div
                className="FashionFlashSaleBar_bg_sold pos-abs-100 brs-8px"
                style={{
                    backgroundImage: `url(${flash_sale_bar})`,
                }}
            ></div>

            <div className="FashionFlashSaleBar_bg pos-abs-100 brs-8px overflow-hidden">
                <div
                    className="FashionFlashSaleBar_bg_contain pos-abs right-0 y-center h-100per"
                    style={{ width: `${((total - sold) * 100) / total}%` }}
                ></div>
            </div>

            <div className="pos-abs-100">
                <div
                    className={`text-align-center ${
                        IS_MOBILE ? 'line-11px' : 'line-14px'
                    }`}
                >
                    <span
                        className={`text-white font-500 ${
                            IS_MOBILE ? 'font-11px' : 'font-12px'
                        }`}
                    >
                        {sold / total >= 0.8
                            ? 'SẮP CHÁY HÀNG'
                            : `ĐÃ BÁN ${sold}`}
                    </span>
                </div>
            </div>

            <div
                className={`pos-abs bottom-0 left-0 ${
                    sold / total >= 0.7 ? '' : 'display-none'
                }`}
            >
                <img
                    className="padding-x-4px"
                    src={fire}
                    alt=""
                    width="30"
                    height="24"
                />
            </div>
        </div>
    );
}

export default FashionFlashSaleBar;
