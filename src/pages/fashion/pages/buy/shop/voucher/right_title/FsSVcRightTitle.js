import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
FsSVcRightTitle.propTypes = {};

//
function FsSVcRightTitle({ shop_discount_value }) {
    //
    return IS_MOBILE ? (
        <div>
            <span
                className={`margin-right-5px color-fashion ${
                    shop_discount_value ? '' : 'display-none'
                }`}
            >
                -{shop_discount_value}
            </span>

            <IconsArrow x={200} size_icon="1rem" />
        </div>
    ) : (
        <div
            className={`cursor-pointer ${
                shop_discount_value ? 'text-red' : 'text-blue'
            }`}
        >
            {shop_discount_value
                ? `Voucher giảm ${shop_discount_value}`
                : 'Chọn voucher của shop'}
        </div>
    );
}

export default FsSVcRightTitle;
