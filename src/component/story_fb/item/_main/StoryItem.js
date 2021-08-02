import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import UnitTime from '../../../../_some_function/UnitTime';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PictureName from '../../../picture_name/pic_name/PictureName';
import NextPrevDiv from '../../../some_div/next_prev_div/NextPrevDiv';
//
import StoryItemMain from '../vid_pic_text/StoryItemMain';
import StoryStep from '../step/StoryStep';
// .
import './StoryItem.scss';

//
StoryItem.propTypes = {};

//
function StoryItem({
    handleCloseStoryItem,
    active_step,

    is_has_next,
    is_has_prev,
    handleNext,
    handlePrev,

    user,
    count,
    vid_pic,
    created_time,

    text,
    top_text,
    left_text,
    color_text_ix,
    scale_text,
}) {
    //
    return (
        <div className={`StoryItem wh-100 ${IS_MOBILE ? 'position-rel' : ''}`}>
            <div className="StoryItem-contain position-rel wh-100">
                <StoryItemMain
                    vid_pic={vid_pic}
                    text={text}
                    top_text={top_text}
                    left_text={left_text}
                    color_text_ix={color_text_ix}
                    scale_text={scale_text}
                />

                <div className="StoryItem_head">
                    <div className="StoryItem_head-contain padding-8px">
                        {count > 1 ? (
                            <div className="StoryItem_step">
                                <StoryStep
                                    count_step={count}
                                    active_step={active_step}
                                />
                            </div>
                        ) : null}

                        <div className="StoryItem_user width-fit-content">
                            <PictureName
                                user={user}
                                content={
                                    <span className="font-12px margin-left-5px">
                                        {UnitTime(
                                            new Date().getTime() -
                                                new Date(created_time).getTime()
                                        )}
                                    </span>
                                }
                                is_inline_block={true}
                            />
                        </div>
                    </div>
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

                <div className="story-bg"></div>
            </div>

            <NextPrevDiv
                is_btn_circle={true}
                is_has_next={is_has_next}
                is_has_prev={is_has_prev}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}

export default StoryItem;
