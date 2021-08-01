import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import { type_video_or_img } from '../../../../_some_function/VideoOrImage';
import UnitTime from '../../../../_some_function/UnitTime';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
//
import PictureName from '../../../picture_name/pic_name/PictureName';
import NextPrevDiv from '../../../some_div/next_prev_div/NextPrevDiv';
//
import StoryStep from '../step/StoryStep';
// .
import './StoryItem.scss';

//
StoryItem.propTypes = {};

//
function StoryItem({
    ix,
    count_user,
    handleNextUserStory,
    handlePrevUserStory,

    user,
    count,
    count_new,
    vid_pic,
    created_time,
}) {
    //
    const is_img = type_video_or_img(vid_pic) == 'img';

    //
    const [state_obj, setStateObj] = useState({
        active_step: count_new == 0 ? 0 : count - count_new,
        show_control: !is_img,
    });

    const { active_step, show_control } = state_obj;

    const is_has_next = active_step < count - 1 || ix < count_user - 1;
    const is_has_prev = active_step > 0 || ix > 0;

    //
    const ref_video_elm = useRef(null);

    const ref_timeout_control = useRef(null);

    //
    function handleNext() {
        if (active_step == count - 1) {
            is_has_next && handleNextUserStory();
        } else {
            setStateObj({
                ...state_obj,
                active_step: active_step + 1,
            });
        }
    }

    //
    function handlePrev() {
        if (active_step == 0) {
            is_has_prev && handlePrevUserStory();
        } else {
            setStateObj({
                ...state_obj,
                active_step: active_step - 1,
            });
        }
    }

    //
    function handleToggleControl() {
        if (is_img) {
            return;
        }

        setStateObj({
            ...state_obj,
            show_control: !show_control,
        });

        if (!show_control) {
            ref_timeout_control.current = setTimeout(() => {
                setStateObj({
                    ...state_obj,
                    show_control: false,
                });
            }, 1000);
        } else {
            clearTimeout(ref_timeout_control.current);
        }
    }

    //
    function handleTogglePlayVideo() {
        if (is_img) {
            return;
        }

        ref_video_elm.current.played
            ? ref_video_elm.current.pause()
            : ref_video_elm.current.play();

        setStateObj({
            ...state_obj,
            show_control: false,
        });

        clearTimeout(ref_timeout_control.current);
    }

    //
    return (
        <div className={`StoryItem wh-100 ${IS_MOBILE ? 'position-rel' : ''}`}>
            <div className="StoryItem-contain position-rel wh-100">
                <div className="wh-100" onClick={handleToggleControl}>
                    {is_img ? (
                        <img
                            src={vid_pic}
                            alt=""
                            className="wh-100 object-fit-cover"
                        />
                    ) : (
                        <video
                            src={vid_pic}
                            alt=""
                            ref={ref_video_elm}
                            className="wh-100 object-fit-contain"
                        />
                    )}
                </div>

                <div className="StoryItem_head">
                    <div className="StoryItem_step">
                        <StoryStep
                            count_step={count}
                            active_step={active_step}
                        />
                    </div>

                    <div className="StoryItem_user width-fit-content">
                        <PictureName
                            user={user}
                            content={UnitTime(
                                new Date().getTime() -
                                    new Date(created_time).getTime()
                            )}
                        />
                    </div>
                </div>

                <div
                    className={`StoryItem_close ${
                        IS_MOBILE ? '' : 'display-none'
                    }`}
                >
                    <IconsArrow y={400} />
                </div>

                {is_img ? null : (
                    <div
                        className={`StoryItem_control pos-abs-center ${
                            show_control ? '' : 'display-none'
                        }`}
                    >
                        <div
                            className="StoryItem_control-contain"
                            onClick={handleTogglePlayVideo}
                        >
                            <IconsInput x={200} />
                        </div>
                    </div>
                )}

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
