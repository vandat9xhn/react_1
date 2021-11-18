import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import StoryContentHead from '../head/StoryContentHead';
import StoryContentStoryText from '../vid_pic_text/text/StoryContentStoryText';
import StoryContentStoryPic from '../vid_pic_text/pic/StoryContentStoryPic';
// 
import './StoryContent.scss';

//
StoryContent.propTypes = {};

//
function StoryContent({
    handleCloseStoryItem,
    active_step,

    user,
    count,
    
    vid_pic_obj,
    text_arr,
    type_story,
    created_time,
}) {
    //
    return (
        <div
            className={`StoryContent wh-100 brs-10px-mb overflow-hidden ${IS_MOBILE ? 'pos-rel' : ''}`}
        >
            <div className="story-bg"></div>

            <div className="StoryContent_contain pos-rel wh-100">
                {type_story == 'text' ? (
                    <StoryContentStoryText
                        vid_pic={vid_pic_obj.vid_pic}
                        text={text_arr[0].text}
                        font_family={text_arr[0].font_family}
                        scale={text_arr[0].scale}
                    />
                ) : type_story == 'pic' ? (
                    <StoryContentStoryPic
                        vid_pic_obj={vid_pic_obj}
                        text_arr={text_arr}
                    />
                ) : null}

                <div className="StoryContent_head pos-abs-0 z-index-1 w-100per">
                    <StoryContentHead
                        count={count}
                        active_step={active_step}
                        user={user}
                        created_time={created_time}
                    />
                </div>

                <div
                    className={`StoryContent_close pos-abs right-0 z-index-2 ${
                        IS_MOBILE ? '' : 'display-none'
                    }`}
                >
                    <div
                        className="StoryContent_close_contain display-flex-center brs-50 bg-shadow-2"
                        onClick={handleCloseStoryItem}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryContent;
