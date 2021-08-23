import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
// 
import StarsRate from '../../../../../../../component/stars_rate/_main/StarsRate';

//
FsIRateBriefing.propTypes = {
    // rate_avg: PropTypes.number,
};

//
function FsIRateBriefing({}) {
    //
    const { item_info } = useContext(context_fashion_item);

    const { rate_avg } = item_info;

    //
    return (
        <div className="FsIRateBriefing color-fashion">
            <div>
                <span className="font-30px">{rate_avg}</span>

                <span className="font-18px"> trên 5</span>
            </div>

            <div>
                <StarsRate
                    rate_avg={rate_avg}
                    size_icon="20px"
                    color="currentColor"
                />
            </div>
        </div>
    );
}

export default FsIRateBriefing;
