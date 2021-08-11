import React from 'react';
import PropTypes from 'prop-types';
//
import StoryTextText from '../../../../text/story_text/StoryTextText';
//
// import './StoryFaceContentStoryText.scss';

//
StoryFaceContentStoryText.propTypes = {};

//
function StoryFaceContentStoryText({ vid_pic, text, font_family, scale }) {
    //
    return (
        <div className="StoryFaceContentStoryText wh-100 position-rel">
            <img src={vid_pic} alt="" className="wh-100" />

            <StoryTextText
                text={text}
                font_family={font_family}
                scale={scale}
            />
        </div>
    );
}

export default StoryFaceContentStoryText;
