import React from 'react';
import PropTypes from 'prop-types';
//
import { data_story_text_color_arr } from '../../../../_data/story/text';
//
import './StoryText.scss';

//
StoryText.propTypes = {};

//
function StoryText({ text, top_text, left_text, color_text_ix, scale_text }) {
    //
    return (
        <div className="StoryText" style={{ top: top_text, left: left_text }}>
            <div
                className="StoryText_contain"
                style={{ transform: `scale(${scale_text})` }}
            >
                <div className="StoryText_item">
                    <span
                        className={`${data_story_text_color_arr[color_text_ix]}`}
                    >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default StoryText;
