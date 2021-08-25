import React from 'react';
import PropTypes from 'prop-types';
// 
import StarsRate from '../../../../../../component/stars_rate/_main/StarsRate';

//
FsIRateOverviewMb.propTypes = {
    rate_count: PropTypes.number,
    rate_avg: PropTypes.number,
};

//
function FsIRateOverviewMb({rate_avg, rate_count}) {
    return (
        <div className="FsIRateOverviewMb">
            <div className="display-flex font-12px">
                <div className="margin-right-5px">
                    <StarsRate
                        rate_avg={rate_avg}
                        size_icon="14px"
                        color="var(--gold)"
                    />
                </div>

                <div className="margin-right-5px color-fashion">
                    {rate_avg}/5
                </div>

                <div className="text-third">({rate_count} Đánh Giá)</div>
            </div>
        </div>
    );
}

export default FsIRateOverviewMb;
