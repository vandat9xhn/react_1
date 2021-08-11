import React from 'react';
import PropTypes from 'prop-types';
//
import StoryFaceContentStoryText from '../story_text/StoryFaceContentStoryText';
import StoryFaceContentStoryPic from '../story_pic/StoryFaceContentStoryPic';

//
StoryFaceContent.propTypes = {};

//
function StoryFaceContent({ type_story, vid_pic_obj, text_arr }) {
    //
    return type_story == 'text' ? (
        <StoryFaceContentStoryText
            vid_pic={vid_pic_obj.vid_pic}
            text={text_arr[0].text}
            font_family={text_arr[0].font_family}
            scale={text_arr[0].scale}
        />
    ) : type_story == 'pic' ? (
        <StoryFaceContentStoryPic
            vid_pic_obj={vid_pic_obj}
            text_arr={text_arr}
        />
    ) : null;
}

export default StoryFaceContent;
