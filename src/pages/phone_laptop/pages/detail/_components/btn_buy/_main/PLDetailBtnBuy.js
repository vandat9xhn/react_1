import React from 'react';
import PropTypes from 'prop-types';
// 
import { formatNum } from '../../../../../../../_some_function/FormatNum';

//
PLDetailBtnBuy.propTypes = {};

//
function PLDetailBtnBuy({ is_price_2, new_price_2, handleBuyNow }) {
    //
    return (
        <button
            className={`btn btn-hv btn-active w-100per brs-4px text-white font-15px cursor-pointer ${
                is_price_2
                    ? 'padding-y-5px bg-fashion-mall'
                    : 'padding-y-15px bg-fashion-border'
            }`}
            type="button"
            onClick={handleBuyNow}
        >
            <div className="text-upper">
                Mua ngay{is_price_2 ? ` giá rẻ ${formatNum(new_price_2)}₫` : ''}
            </div>

            {is_price_2 ? (
                <div className="font-12px">Chỉ áp dụng giao hàng tận nơi</div>
            ) : null}
        </button>
    );
}

export default PLDetailBtnBuy;
