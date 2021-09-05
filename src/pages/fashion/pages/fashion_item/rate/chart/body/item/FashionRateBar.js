import React from 'react';
import PropTypes from 'prop-types';
//
import IconsStar from '../../../../../../../../_icons_svg/icons_star/IconsStar';
// 
import BarPercent from '../../../../../../../../component/chart/bar_percent/BarPercent';
// 
import './FashionRateBar.scss';

//
FashionRateBar.propTypes = {};

//
function FashionRateBar({ ix, rate_count, rate_num_arr }) {
    //
    return (
        <div className="FashionRateBar">
            <div className="FashionRateBar_row display-flex align-items-center">
                <div className="FashionRate_title display-flex align-items-center font-500">
                    <div>{ix + 1}</div>

                    <div>
                        <IconsStar size_icon="1.5rem" />
                    </div>
                </div>

                <div className="FashionRateBar_bar">
                    <BarPercent
                        percent={
                            rate_count
                                ? Math.round((rate_num_arr[ix] * 100) / rate_count)
                                : 0.0
                        }
                    />
                </div>

                <div className="FashionRateBar_rate">
                    <div>
                        {rate_num_arr ? rate_num_arr[ix] : 0}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionRateBar;
