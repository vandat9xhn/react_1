import React from 'react';
import PropTypes from 'prop-types';
// 
import './IconLearn.scss';

//
IconLearn.propTypes = {
    size_icon: PropTypes.string,
};

IconLearn.defaultProps = {
    size_icon: '1.5rem',
};

//
function IconLearn({ size_icon }) {
    //
    return (
        <svg
            className="IconLearn"
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            fill="none"
        >
            <path
                className="IconLearn_learn"
                d="M31.3559 135.491V15H163.559V135.491M80.1695 88.9649V108.053C90.3624 106.853 95.3154 
                108.398 101.525 118.789C106.775 109.334 111.436 106.625 123.898 108.053V88.9649L136.102 
                74.6491M136.102 74.6491L101.525 54.3684L68.9831 74.6491L101.525 94.9298L136.102 74.6491ZM83.7288 
                185H10L31.3559 144.5H163.559L190 185H119.831M83.7288 185L87.2881 167.105H115.763L119.831 
                185M83.7288 185H119.831M45.5932 135.491H150.339V37.6667H45.5932V135.491Z"
                stroke="var(--md-color)"
                strokeWidth="5"
                // strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default IconLearn;
