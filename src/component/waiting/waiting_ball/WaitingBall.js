import React from 'react';
import PropTypes from 'prop-types';
//
import './WaitingBall.scss';

//
WaitingBall.propTypes = {
    waitingBall_center: PropTypes.bool,
    is_fetching: PropTypes.bool,
};

WaitingBall.defaultProps = {
    is_fetching: true,
};

//
function WaitingBall({ waitingBall_center, is_fetching }) {
    //
    return (
        <div
            className={`${is_fetching ? 'WaitingBall' : 'display-none'} ${
                waitingBall_center ? 'WaitingBall_center' : ''
            }`}
        >
            <div className="WaitingBall_ball" />

            <div className="WaitingBall_ball WaitingBall_2" />
            
            <div className="WaitingBall_ball WaitingBall_3" />
        </div>
    );
}

export default WaitingBall;
