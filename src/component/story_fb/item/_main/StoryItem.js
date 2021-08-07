import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import { data_story_text_color_arr } from '../../../../_data/story/text';
//
import StoryItemMain from '../vid_pic_text/StoryItemMain';
import StoryItemHead from '../head/StoryItemHead';
// .
import './StoryItem.scss';

//
StoryItem.propTypes = {};

//
function StoryItem({
    handleCloseStoryItem,
    active_step,

    user,
    count,
    is_story_text,
    created_time,

    vid_pic,
    top_pic,
    left_pic,
    scale_pic,
    rotate_pic,

    text,
    font_family,
    top_text,
    left_text,
    color_text_ix,
    scale_text,
}) {
    //
    return (
        <div className={`StoryItem wh-100 ${IS_MOBILE ? 'position-rel' : ''}`}>
            <div className="story-bg"></div>
            
            <div className="StoryItem-contain position-rel wh-100">
                <StoryItemMain
                    is_story_text={is_story_text}
                    //
                    vid_pic={vid_pic}
                    top_pic={top_pic}
                    left_pic={left_pic}
                    scale_pic={scale_pic}
                    rotate_pic={rotate_pic}
                    //
                    text={text}
                    font_family={font_family}
                    color_text={data_story_text_color_arr[color_text_ix]}
                    top_text={top_text}
                    left_text={left_text}
                    scale_text={scale_text}
                />

                <div className="StoryItem_head">
                    <StoryItemHead
                        count={count}
                        active_step={active_step}
                        user={user}
                        created_time={created_time}
                    />
                </div>

                <div
                    className={`StoryItem_close ${
                        IS_MOBILE ? '' : 'display-none'
                    }`}
                >
                    <div
                        className="StoryItem_close-contain display-flex-center bg-ccc brs-50"
                        onClick={handleCloseStoryItem}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryItem;
