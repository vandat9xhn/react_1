import React from 'react';
import PropTypes from 'prop-types';

import './IconHeart.scss';

//
IconHeart.propTypes = {
    size_icon: PropTypes.string,
};

IconHeart.defaultProps = {
    size_icon: '1rem',
};

/*
    icon type like: (x, y):
        4. heart: (600, 0)
*/
//
function IconHeart({ size_icon }) {
    // 
    return (
        <svg
            className="IconsTypeLike IconHeart"
            viewBox="600 0 200 200"
            width={size_icon}
            height={size_icon}
            stroke="none"
            strokeLinecap="round"
        >
            {/* heart x=600 */}
            <circle
                className="IconHeart_face"
                cx="700"
                cy="100"
                r="100"
                fill="var(--heart)"
            />

            <path
                className="IconHeart_heart"
                d="M700,170 Q645,145
                    630,100 C615,35 690,35 700,65
                    C710,35 785,35 770,100
                    Q755,145 700,170Z"
                fill="var(--heart-blur)"
            />
        </svg>
    );
}

export default IconHeart;
