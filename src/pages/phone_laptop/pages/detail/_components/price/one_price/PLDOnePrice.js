import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';

//
PLDOnePrice.propTypes = {};

//
function PLDOnePrice({ new_price, old_price, discount, installment }) {
    //
    return (
        <div className="PLDOnePrice">
            <div>
                <span className="PLDOnePrice_new margin-right-10px color-fashion-mall font-700 font-20px">
                    {formatNum(new_price)}₫
                </span>

                {old_price ? (
                    <del className="PLDOnePrice_old margin-right-10px text-del font-16px">
                        {formatNum(old_price)}₫
                    </del>
                ) : null}

                {discount ? (
                    <span className="PLDOnePrice_discount color-fashion font-16px">
                        {discount}
                    </span>
                ) : installment ? (
                    <div className="PLDOnePrice_installment inline-block padding-x-10px brs-2px bg-f1 font-13px">
                        Trả góp {installment}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default PLDOnePrice;
