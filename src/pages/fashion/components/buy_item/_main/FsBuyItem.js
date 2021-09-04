import React from 'react';
import PropTypes from 'prop-types';
// 
import { formatNum } from '../../../../../_some_function/FormatNum';
// 
import FsShopDealLabel from '../../shop_deal_label/FsShopDealLabel';

//
FsBuyItem.propTypes = {};

//
function FsBuyItem({ img, name, label_deal, type, new_price, total_add_cart }) {
    //
    return (
        <div className="FsBuyItem">
            <div className="display-flex align-items-center">
                <div className="margin-right-10px">
                    <img src={img} alt="" width="40" height="40" />
                </div>

                <div className="flex-grow-1 display-flex align-items-center">
                    <div>
                        <div className="inline-block">
                            <FsShopDealLabel label={label_deal} />
                        </div>

                        <span>{name}</span>
                    </div>

                    <div className="text-del">Loại: {type}</div>

                    <div>₫{formatNum(new_price)}</div>

                    <div>{total_add_cart}</div>

                    <div>₫{formatNum(new_price * total_add_cart)}</div>
                </div>
            </div>
        </div>
    );
}

export default FsBuyItem;
