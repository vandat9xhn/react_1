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
            className={`StoryContent wh-100 ${IS_MOBILE ? 'pos-rel' : ''}`}
        >
            <div className="story-bg"></div>

            <div className="StoryContent-contain pos-rel wh-100">
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

                <div className="StoryContent_head">
                    <StoryContentHead
                        count={count}
                        active_step={active_step}
                        user={user}
                        created_time={created_time}
                    />
                </div>

                <div
                    className={`StoryContent_close ${
                        IS_MOBILE ? '' : 'display-none'
                    }`}
                >
                    <div
                        className="StoryContent_close-contain display-flex-center bg-ccc brs-50"
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
