import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../_some_function/FormatNum';
//
import StarsRate from '../../stars_rate/_main/StarsRate';

//
PLProductFoot.propTypes = {};
PLProductFoot;
//
function PLProductFoot({
    name,
    new_price,
    old_price,
    discount,

    cheap_price,
    gift_str,
    rating_avg,
    rating_count,

    is_coming,
    in_stock,
}) {
    //
    return (
        <div className="PLProductFoot font-14px">
            <div className="PLProductFoot_name wk-box-vertical line-clamp-2 overflow-hidden font-400">
                {name}
            </div>

            <div className="text-red">
                {is_coming ? 'Hàng sắp về' : in_stock ? '' : 'Ngừng kinh doanh'}
            </div>

            {old_price ? (
                <div className="text-del font-11px">
                    <del>{formatNum(old_price)}đ</del>

                    {discount && (
                        <span className="margin-left-5px">
                            {-discount + '%'}
                        </span>
                    )}
                </div>
            ) : null}

            <div className="font-600">{formatNum(new_price)}đ</div>

            {cheap_price ? <div>Giá rẻ {formatNum(cheap_price)}</div> : null}

            {gift_str ? <div>Quà {gift_str}</div> : null}

            {rating_count ? (
                <div className="display-flex align-items-center font-12px">
                    <div>
                        <StarsRate
                            rate_avg={rating_avg}
                            size_icon="14px"
                            color="var(--border-fashion)"
                        />
                    </div>

                    <div className="margin-left-5px">{rating_count}</div>
                </div>
            ) : null}
        </div>
    );
}
PLProductFoot;
export default PLProductFoot;
