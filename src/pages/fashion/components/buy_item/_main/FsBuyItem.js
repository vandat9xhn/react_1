import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import FsShopDealLabel from '../../shop_deal_label/FsShopDealLabel';
//
import './FsBuyItem.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsBuyItem.propTypes = {};

//
function FsBuyItem({
    img,
    name,
    label_deal,
    model_name,
    new_price,
    total_add_cart,
}) {
    //
    return (
        <div className="FsBuyItem text-222 font-14px">
            <div className="FsBuyItem_row display-flex align-items-center">
                <div className="FsBuyItem_left margin-right-10px">
                    <img src={img} alt="" width="40" height="40" />
                </div>

                <div className="FsBuyItem_right flex-grow-1 display-flex align-items-center">
                    <div className="FsBuyItem_name margin-right-10px text-nowrap">
                        <div
                            className={`${
                                label_deal
                                    ? 'inline-flex align-items-center margin-right-5px'
                                    : 'display-none'
                            }`}
                        >
                            <FsShopDealLabel
                                label={label_deal}
                                class_main="padding-1px line-10px color-fashion font-10px"
                            />
                        </div>

                        <span>{name}</span>
                    </div>

                    <div className="FsBuyItem_type text-del">
                        <div>
                            <div
                                className={`padding-x-10px text-nowrap ${
                                    model_name ? '' : 'display-none'
                                }`}
                            >
                                Loại: {model_name}
                            </div>
                        </div>

                        {IS_MOBILE ? (
                            <div className="text-align-end">
                                <div>x {total_add_cart}</div>

                                <div
                                    className={`font-14px ${
                                        new_price ? '' : 'display-none'
                                    }`}
                                >
                                    ₫{formatNum(new_price)}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="FsBuyItem_price text-align-center">
                        {new_price ? `₫${formatNum(new_price)}` : ''}
                    </div>

                    <div className="FsBuyItem_quantity text-align-center">
                        {total_add_cart}
                    </div>

                    <div className="FsBuyItem_total text-align-end">
                        {new_price
                            ? `₫${formatNum(new_price * total_add_cart)}`
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsBuyItem;
