import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryText.scss';

//
StoryText.propTypes = {};

//
function StoryText({
    is_story_text,
    is_show_more,

    text,
    color_text,
    font_family,
}) {
    //
    return (
        <div className="StoryText">
            <div
                className={`StoryText_contain font-22px ${color_text} ${
                    is_story_text
                        ? `${
                              is_show_more
                                  ? 'StoryText_contain-more scroll-thin'
                                  : 'StoryText_contain-less overflow-hidden'
                          }`
                        : ''
                }`}
                style={{ fontFamily: font_family }}
            >
                <span className="StoryText_item">{text}</span>
            </div>
        </div>
    );
}

export default StoryText;
