import React from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../../../../component/stars_rate/_main/StarsRate';

//
FashionRateFoot.propTypes = {
    user_rate: PropTypes.number,
    openRateNow: PropTypes.func,
};

//
function FashionRateFoot({ user_rate, openRateNow }) {
    return (
        <div className="FashionRateFoot">
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <div className="FashionRate_rate-user font-500">
                        You:
                    </div>

                    <StarsRate rate_avg={user_rate || 0} size_icon="1rem" />
                </div>

                <div
                    className="font-500 cursor-pointer"
                    onClick={openRateNow}
                >
                    {user_rate ? 'Change Rate' : 'Rate Now'}
                </div>
            </div>
        </div>
    );
}

export default FashionRateFoot;
