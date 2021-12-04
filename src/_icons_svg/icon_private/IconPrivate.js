import React from 'react';
import PropTypes from 'prop-types';

//
IconPrivate.propTypes = {
    size_icon: PropTypes.string,
    stroke: PropTypes.string,
};

IconPrivate.defaultProps = {
    size_icon: '1rem',
    stroke: 'var(--md-color)',
};

//
function IconPrivate({ size_icon, stroke }) {
    //
    return (
        <svg
            width={size_icon}
            height={size_icon}
            viewBox="0 0 200 200"
            stroke={stroke}
            strokeLinejoin="round"
        >
            <path
                d="M35 185V83.2216H165V185H35Z"
                fill={stroke}
                strokeWidth="15"
            />

            <path
                d="M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263
                    16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889
                    57.2368 83.2217 57.2368 83.2217"
                strokeWidth="20"
                fill="none"
            />

            <path
                d="M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196
                    111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613
                    119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z"
                fill="white"
            />
        </svg>
    );
}

export default IconPrivate;
