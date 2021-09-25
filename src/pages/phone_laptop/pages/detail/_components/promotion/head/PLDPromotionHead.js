import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../_some_function/FormatDate';
import { formatNum } from '../../../../../../../_some_function/FormatNum';

//
PLDPromotionHead.propTypes = {};

//
function PLDPromotionHead({ cost, end_time }) {
    //
    return (
        <div className="PLDPromotionHead padding-y-8px padding-x-10px bg-f1">
            <h2 className="font-14px font-700">
                Khuyến mãi{cost ? ` trị giá ${formatNum(cost)}₫` : ''}
            </h2>

            <div className="font-12px text-third">
                Giá và khuyến mãi dự kiến áp dụng đến{' '}
                {formatLocalDateTimeString(end_time)}
            </div>
        </div>
    );
}

export default PLDPromotionHead;
