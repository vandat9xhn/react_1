import React from 'react';
import PropTypes from 'prop-types';
// 
import StarsRate from '../../../../../../../../component/stars_rate/_main/StarsRate';

//
FsIIfRRateSold.propTypes = {};

//
function FsIIfRRateSold({ rate_avg, rate_count, sold }) {
    // 
    return (
        <div>
            <div className="display-flex">
                <div className="display-flex-center">
                    <div>
                        <span>{rate_avg}</span>
                    </div>

                    <div>
                        <StarsRate rate_avg={rate_avg} size_icon="0.75rem" />
                    </div>
                </div>

                <div>
                    <span>{rate_count}</span>

                    <span>Đánh Giá</span>
                </div>

                <div>
                    <span>{sold}</span>

                    <span>Đã Bán</span>
                </div>
            </div>
        </div>
    );
}

export default FsIIfRRateSold;
