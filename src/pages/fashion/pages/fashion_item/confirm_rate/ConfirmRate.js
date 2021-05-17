import React from 'react';
import PropTypes from 'prop-types';
// 
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';

// 
ConfirmRate.propTypes = {
    rate_avg: PropTypes.number,
    handleChangeRate: PropTypes.func,
};

function ConfirmRate(props) {
    const {rate_avg, handleChangeRate} = props;

    // 
    return (
        <div className="FashionItem_rate">
            <div className="FashionItem_rate-stars">
                <StarsRate
                    rate_avg={rate_avg}
                    size_icon="2rem"
                    handleChangeRate={handleChangeRate}
                />
            </div>

            <div>
                <textarea
                    className="FashionItem_rate-textarea scroll-thin brs-5px"
                    rows="4"
                    placeholder="Write something..."
                />
            </div>

            <div className="label-field">Do you want to rate now?</div>
        </div>
    );
}

export default ConfirmRate;
