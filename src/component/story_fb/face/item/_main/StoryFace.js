import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicObserve from '../../../../vid_pic/observe/VidPicObserve';
// 
import BadgeDiv from '../../../../some_div/badge_div/BadgeDiv';
//
import StoryText from '../../../_components/text/StoryText';
import StoryFaceUserPic from '../user_pic/StoryFaceUserPic';
import StoryFaceName from '../name/StoryFaceName';
// 
import './StoryFace.scss';

//
StoryFace.propTypes = {};

//
function StoryFace({
    user,
    count_new,
    vid_pic,

    text,
    top_text,
    left_text,
    color_text_ix,
    scale_text,
}) {
    //
    const { first_name, last_name, picture } = user;

    //
    return (
        <div className="StoryFace position-rel h-100per story-active font-13px">
            <div className="StoryFace_img h-100per story-transition">
                <VidPicObserve
                    vid_pic={vid_pic}
                    className="wh-100 object-fit-cover"
                />
            </div>

            <StoryText
                text={text}
                top_text={top_text}
                left_text={left_text}
                color_text_ix={color_text_ix}
                scale_text={scale_text}
            />

            <div className="StoryFace_pic">
                <StoryFaceUserPic count_new={count_new} picture={picture} />
            </div>

            <div className="StoryFace_name">
                <StoryFaceName name={first_name + ' ' + last_name} />
            </div>

            <div className="story-bg"></div>

            <div className="story-bg-hv"></div>

            <div className="StoryFace_count_new">
                <BadgeDiv num={count_new} />
            </div>
        </div>
    );
}

export default StoryFace;
