import React from 'react';
import PropTypes from 'prop-types';
//
import StoryPicPic from '../../../../pic/StoryPicPic';
import StoryPicText from '../../../../text/story_pic/StoryPicText';
//
// import './StoryFaceContentStoryPic.scss';

//
StoryFaceContentStoryPic.propTypes = {};

//
function StoryFaceContentStoryPic({ vid_pic_obj, text_arr }) {
    //
    return (
        <div className="wh-100 position-rel">
            <StoryPicPic {...vid_pic_obj} />

            {text_arr.map((text_obj, ix) => (
                <StoryPicText key={`${ix}`} text_obj={text_obj} />
            ))}
        </div>
    );
}

export default StoryFaceContentStoryPic;
