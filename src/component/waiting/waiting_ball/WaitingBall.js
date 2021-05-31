import React from 'react';
import PropTypes from 'prop-types';
//
import './WaitingBall.scss';

//
WaitingBall.propTypes = {
    waitingBall_center: PropTypes.bool,
    open_fetching: PropTypes.bool,
};

WaitingBall.defaultProps = {
    open_fetching: true,
};

//
function WaitingBall({ waitingBall_center, open_fetching }) {
    //
    return (
        <div
            className={`${open_fetching ? 'WaitingBall' : 'display-none'} ${
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
