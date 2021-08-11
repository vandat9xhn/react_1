import React from 'react';
import PropTypes from 'prop-types';
//
import StoryTextText from '../../../../../text/story_text/StoryTextText';
//
import './StoryContentStoryText.scss';

//
StoryContentStoryText.propTypes = {};

//
function StoryContentStoryText({ vid_pic, text, font_family, scale }) {
    //
    return (
        <div className="StoryContentStoryText wh-100 position-rel">
            <img src={vid_pic} alt="" className="wh-100" />

            <StoryTextText
                text={text}
                font_family={font_family}
                scale={scale}
            />
        </div>
    );
}

export default StoryContentStoryText;
