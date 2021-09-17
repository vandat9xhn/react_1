import React from 'react';
import PropTypes from 'prop-types';
import { formatNum } from '../../../../../../../../../_some_function/FormatNum';

//
FsPPurProductPrice.propTypes = {};

//
function FsPPurProductPrice({ old_price, new_price }) {
    //
    return (
        <div className="FsPPurProductPrice font-14px">
            {old_price ? (
                <span className="margin-right-5px text-del">
                    <del>₫{formatNum(old_price)}</del>
                </span>
            ) : null}

            <span className={`${old_price ? 'color-fashion' : ''}`}>
                ₫{formatNum(new_price)}
            </span>
        </div>
    );
}

export default FsPPurProductPrice;
