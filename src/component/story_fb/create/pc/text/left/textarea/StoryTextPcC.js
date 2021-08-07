import React from 'react';
import PropTypes from 'prop-types';
// 
import './StoryTextPcC.scss';

//
StoryTextPcC.propTypes = {};

//
function StoryTextPcC({ text, handleChange }) {
    //
    return (
        <div className="StoryTextPcC position-rel brs-5px">
            <textarea
                className="StoryTextPcC_textarea overflow-y-auto scroll-thin wh-100"
                rows="1"
                value={text}
                placeholder="Start typing"
                spellCheck={false}
                onChange={handleChange}
            />

            <div className="StoryTextPcC_title">
                <div>
                    <span className="font-12px">Text</span>
                </div>
            </div>
        </div>
    );
}

export default StoryTextPcC;
