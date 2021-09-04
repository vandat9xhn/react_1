import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import StarsRate from '../../../../../../../component/stars_rate/_main/StarsRate';
//
import './FsIIfRRateSold.scss';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';

//
FsIIfRRateSold.propTypes = {
    // rate_avg: PropTypes.number,
    // rate_count: PropTypes.number,
    // sold: PropTypes.number,
};

//
function FsIIfRRateSold({}) {
    //
    const { item_info } = useContext(context_fashion_item);

    const { rate_avg, rate_count, sold } = item_info;

    //
    return (
        <div className="FsIIfRRateSold">
            <div className="FsIIfRRateSold_row display-flex">
                <div className="FsIIfRRateSold_avg display-flex-center color-fashion">
                    <div
                        className={`FsIIfRRateSold_avg_rate ${
                            IS_MOBILE ? 'font-14px' : 'font-16px'
                        }`}
                    >
                        <span>{rate_avg}</span>
                    </div>

                    <div
                        className={`${
                            IS_MOBILE ? 'margin-right-5px' : 'margin-left-5px'
                        }`}
                    >
                        <StarsRate
                            rate_avg={rate_avg}
                            size_icon="16px"
                            color="currentColor"
                        />
                    </div>
                </div>

                <div className="FsIIfRRateSold_count">
                    <span className="FsIIfRRateSold_count_num">
                        {rate_count}
                    </span>

                    <span className="text-third margin-left-5px font-14px">
                        Đánh Giá
                    </span>
                </div>

                <div className="FsIIfRRateSold_sold text-nowrap">
                    <span>{sold}</span>

                    <span className="text-third margin-left-5px font-14px">
                        Đã Bán
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FsIIfRRateSold;
