import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
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
            <div className="FsBShopTotal_row flex-end align-items-center">
                <div className="margin-right-15px text-third">
                    {IS_MOBILE ? 'Thành tiền' : 'Tổng sản phẩm'} ({item_count}
                    ):
                </div>

                <div className="FsBShopTotal_price color-fashion font-500 font-20px">
                    ₫{formatNum(total_price)}
                </div>
            </div>
        </div>
    );
}

export default FsBShopTotal;
