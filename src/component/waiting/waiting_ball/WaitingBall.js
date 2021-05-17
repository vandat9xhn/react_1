import React from 'react';
import PropTypes from 'prop-types';
//
import './WaitingBall.scss';

//
WaitingBall.propTypes = {
    waitingBall_center: PropTypes.bool,
    is_animate: PropTypes.bool,
};
WaitingBall.defaultProps = {
    is_animate: true,
};

//
function WaitingBall(props) {
    const { waitingBall_center, is_animate } = props;

    // 
    return (
        <div
            className={`${is_animate ? 'WaitingBall' : 'display-none'} ${
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
