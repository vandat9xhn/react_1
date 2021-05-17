import React from 'react';
import PropTypes from 'prop-types';

//
WaitingCell.propTypes = {
    size_icon: PropTypes.string,
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
};

WaitingCell.defaultProps = {
    size_icon: '1.5rem',
    color1: 'var(--black-brown)',
    color2: 'var(--blue)',
    color3: 'var(--danger)',
};

//
function WaitingCell(props) {
    const { size_icon, color1, color2, color3 } = props;

    return (
        <svg
            className="icon_width-height"
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            strokeLinecap="round"
        >
            <line
                id="WaitingCell_line1"
                x1="0"
                y1="20"
                x2="0"
                y2="20"
                stroke={color1}
                strokeWidth="40"
            />
            <line
                id="WaitingCell_line2"
                x1="0"
                y1="100"
                x2="0"
                y2="100"
                stroke={color2}
                strokeWidth="40"
            />
            <line
                id="WaitingCell_line3"
                x1="0"
                y1="180"
                x2="0"
                y2="180"
                stroke={color3}
                strokeWidth="40"
            />
            <animate
                attributeName="x2"
                values="0;200;0"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
                href="#WaitingCell_line1"
            />
            <animate
                attributeName="x2"
                values="0;200;0"
                dur="1s"
                begin="0.2s"
                repeatCount="indefinite"
                href="#WaitingCell_line2"
            />
            <animate
                attributeName="x2"
                values="0;200;0"
                dur="1s"
                begin="0.4s"
                repeatCount="indefinite"
                href="#WaitingCell_line3"
            />
        </svg>
    );
}

export default WaitingCell;
