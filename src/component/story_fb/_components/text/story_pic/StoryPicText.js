import React from 'react';
import PropTypes from 'prop-types';

//
StoryPicText.propTypes = {};

//
function StoryPicText({ text_obj }) {
    //
    const { text, font_family, color, trans_x, trans_y, rotate, scale } =
        text_obj;

    //
    return (
        <div
            className="position-abs"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg)`,
            }}
        >
            <span
                style={{
                    fontFamily: font_family,
                    fontSize: `${scale * 16}px`,
                    color: color,
                }}
            >
                {text}
            </span>
        </div>
    );
}

export default StoryPicText;
