import React from 'react';
import PropTypes from 'prop-types';

import './IconHeart.scss';

/*
    icon type like: (x, y):
        4. heart: (600, 0)
*/
//
function IconHeart() {
    return (
        <svg
            className="IconsTypeLike IconHeart"
            viewBox="600 0 200 200"
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

IconHeart.propTypes = {};

IconHeart.defaultProps = {};

export default IconHeart;
