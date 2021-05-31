import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../../component/stars_rate/_main/StarsRate';
// 
import './ConfirmRate.scss';

//
ConfirmRate.propTypes = {
    rate_avg: PropTypes.number,
    handleChangeRate: PropTypes.func,
};

ConfirmRate.defaultProps = {
    content_rate: '',
}

// 
function ConfirmRate({ rate_avg, handleChangeRate, content_rate }) {
    // 
    const [rate_temp, setRateTemp] = useState(rate_avg || 5)

    // 
    function onChangeRate(new_rate) {
        setRateTemp(new_rate)
        handleChangeRate(new_rate)
    }

    //
    return (
        <div className="ConfirmRate">
            <div className="ConfirmRate_rate">
                <StarsRate
                    rate_avg={rate_temp}
                    size_icon="2rem"
                    handleChangeRate={onChangeRate}
                />
            </div>

            <div>
                <textarea
                    className="ConfirmRate_textarea scroll-thin brs-5px"
                    rows="4"
                    defaultValue={content_rate}
                    placeholder="Write something..."
                />
            </div>

            <div className="label-field">Do you want to rate now?</div>
        </div>
    );
}

export default ConfirmRate;
