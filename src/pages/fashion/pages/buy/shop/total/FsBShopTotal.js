import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
// 
import './FsBShopTotal.scss';

//
FsBShopTotal.propTypes = {};

//
function FsBShopTotal({ total_price, item_count }) {
    //
    return (
        <div className="FsBShopTotal">
            <div className="flex-end align-items-center">
                <div className="margin-right-15px text-third">
                    Tổng sản phẩm ({item_count}):
                </div>

                <div className="color-fashion font-500 font-20px">
                    ₫{formatNum(total_price)}
                </div>
            </div>
        </div>
    );
}

export default FsBShopTotal;
